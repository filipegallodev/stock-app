"use client";

import Header from "@/components/Header/Header";
import ProductCreate from "@/components/Product/ProductCreate";
import ProductList from "@/components/Product/ProductList";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <Header />
      <ProductList />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
