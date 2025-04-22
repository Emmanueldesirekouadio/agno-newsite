"use client";

export default function ProductsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mes produits</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center text-gray-500">
          Aucun produit pour le moment
        </div>
      </div>
    </div>
  );
}
