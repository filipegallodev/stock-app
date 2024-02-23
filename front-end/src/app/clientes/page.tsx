"use client";

import CustomerList from "@/components/Customer/CustomerList";
import Header from "@/components/Header/Header";

export default function Clientes() {
  return (
    <>
      <Header />
      <main className="animeLeft">
        <CustomerList />
      </main>
    </>
  );
}
