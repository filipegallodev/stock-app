"use client";

import Header from "@/components/Header/Header";
import SaleList from "@/components/Sale/SaleList";

export default function Vendas() {
  return (
    <>
      <Header />
      <main className="animeLeft">
        <SaleList />
      </main>
    </>
  );
}
