"use client";

import { useUser } from "@clerk/nextjs";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export default function SharePage() {
  const { user } = useUser();
  const [showCopied, setShowCopied] = useState(false);
  const shareUrl = `AGNO.ee/${user?.username || user?.id}`;
  const shareText = "Découvrez mon profil professionnel sur AGNO !";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err: unknown) {
      console.error("Failed to copy:", err);
    }
  };

  const downloadQRCode = () => {
    const qrCodeSvg = document.querySelector(".qr-code-svg");
    if (!qrCodeSvg) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1000;
    canvas.height = 1000;

    const img = new Image();
    const svgData = new XMLSerializer().serializeToString(qrCodeSvg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const link = document.createElement("a");
      link.download = `agno-qr-code-${new Date().getTime()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  const socialShareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
    email: `mailto:?subject=${encodeURIComponent(
      "Mon profil AGNO"
    )}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Partager mon profil</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">QR Code</h2>
          <div className="flex flex-col items-center gap-4">
            <QRCodeSVG value={shareUrl} size={200} className="qr-code-svg" />
            <button
              onClick={downloadQRCode}
              className="px-4 py-2 bg-[#FF9500] text-white rounded-lg hover:bg-[#FF9500]/90"
            >
              Télécharger
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Lien direct</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-4 py-2 bg-gray-50 rounded-lg"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                {showCopied ? "Copié !" : "Copier"}
              </button>
            </div>

            <div>
              <h3 className="font-medium mb-3">Partager sur les réseaux</h3>
              <div className="flex gap-3">
                <a
                  href={socialShareUrls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={socialShareUrls.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={socialShareUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={socialShareUrls.email}
                  className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">
            Statistiques de partage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-1">Vues totales</h3>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-1">Scans QR</h3>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-1">Clics liens</h3>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-1">Partages</h3>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
