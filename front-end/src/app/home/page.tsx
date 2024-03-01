"use client";

import Header from "@/components/Header/Header";
import {
  Section,
  SectionHeader,
  SectionTitle,
} from "@/components/styles/Section.styled";
import Link from "next/link";
import styled from "styled-components";

const Links = [
  {
    name: "Vendas",
    route: "/vendas",
  },
  {
    name: "Estoque",
    route: "/estoque",
  },
  {
    name: "Clientes",
    route: "/clientes",
  },
  {
    name: "Sair",
    route: "/",
    classname: "logout",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="animeLeft">
        <Section>
          <SectionHeader>
            <SectionTitle>Página Inicial</SectionTitle>
          </SectionHeader>
          <div>
            <ListMenu>
              {Links.map(({ name, route, classname }, index) => (
                <ItemMenu key={index} className={classname}>
                  <LinkStyled href={route}>{name}</LinkStyled>
                </ItemMenu>
              ))}
            </ListMenu>
          </div>
        </Section>
      </main>
    </>
  );
}

const ListMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const ItemMenu = styled.li`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px #00000025;
  background-color: #fff;
  cursor: pointer;
  transition: 0.15s;
  &.logout {
    background-color: #ffaeae;
  }
  &:hover {
    background-color: #fafafa;
    box-shadow: 0px 0px 8px 4px #00000025;
  }
  &.logout:hover {
    background-color: #ff9494;
  }
`;

const LinkStyled = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
`;
