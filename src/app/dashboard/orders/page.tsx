"use client";

export default function OrdersPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mes commandes</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center text-gray-500">
          Aucune commande pour le moment
        </div>
      </div>
    </div>
  );
}
