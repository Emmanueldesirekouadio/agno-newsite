import { getShareStats, incrementShareStat } from "@/lib/services/dashboard";
import { act, renderHook } from "@testing-library/react";
import { useShareStats } from "../useShareStats";

// Mock the services
jest.mock("@/lib/services/dashboard", () => ({
  getShareStats: jest.fn(),
  incrementShareStat: jest.fn(),
}));

describe("useShareStats", () => {
  const mockUserId = "test-user-id";
  const mockStats = {
    totalViews: 10,
    qrScans: 5,
    linkClicks: 3,
    shares: 2,
    lastUpdated: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (getShareStats as jest.Mock).mockResolvedValue(mockStats);
    (incrementShareStat as jest.Mock).mockResolvedValue(undefined);
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useShareStats(undefined));
    expect(result.current.stats).toEqual({
      totalViews: 0,
      qrScans: 0,
      linkClicks: 0,
      shares: 0,
      lastUpdated: expect.any(Date),
    });
    expect(result.current.loading).toBe(true);
  });

  it("should fetch stats on mount", async () => {
    const { result } = renderHook(() => useShareStats(mockUserId));

    // Wait for the initial fetch
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(getShareStats).toHaveBeenCalledWith(mockUserId);
    expect(result.current.stats).toEqual(mockStats);
    expect(result.current.loading).toBe(false);
  });

  it("should increment stats", async () => {
    const { result } = renderHook(() => useShareStats(mockUserId));

    await act(async () => {
      await result.current.increment("totalViews");
    });

    expect(incrementShareStat).toHaveBeenCalledWith(mockUserId, "totalViews");
    expect(result.current.stats.totalViews).toBe(1);
  });

  it("should not increment lastUpdated field", async () => {
    const { result } = renderHook(() => useShareStats(mockUserId));

    await act(async () => {
      await result.current.increment("lastUpdated");
    });

    expect(incrementShareStat).not.toHaveBeenCalled();
  });

  it("should handle errors during fetch", async () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation();
    (getShareStats as jest.Mock).mockRejectedValue(new Error("Fetch failed"));

    const { result } = renderHook(() => useShareStats(mockUserId));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(consoleError).toHaveBeenCalled();
    expect(result.current.stats).toEqual({
      totalViews: 0,
      qrScans: 0,
      linkClicks: 0,
      shares: 0,
      lastUpdated: expect.any(Date),
    });
    expect(result.current.loading).toBe(false);

    consoleError.mockRestore();
  });

  it("should handle errors during increment", async () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation();
    (incrementShareStat as jest.Mock).mockRejectedValue(
      new Error("Increment failed")
    );

    const { result } = renderHook(() => useShareStats(mockUserId));

    await act(async () => {
      await result.current.increment("totalViews");
    });

    expect(consoleError).toHaveBeenCalled();
    expect(result.current.stats.totalViews).toBe(0);

    consoleError.mockRestore();
  });
});
