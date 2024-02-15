"use client";

import Header from "@/components/Header/Header";
import ProductCreate from "@/components/Product/ProductCreate";
import ProductList from "@/components/Product/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductCreate />
        <ProductList />
      </main>
    </>
  );
}
