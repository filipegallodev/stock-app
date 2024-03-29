import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";

const MenuItems = [
  {
    name: "Home",
    route: "/home",
  },
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
];

const HeaderMenu = () => {
  const routePathname = usePathname();

  if (routePathname === "/") {
    return null;
  }
  return (
    <NavContainer>
      <NavList>
        {MenuItems.map(({ name, route }, index) => (
          <NavItem key={index}>
            <Link
              href={route}
              className={routePathname === `${route}` ? "active" : ""}
            >
              {name}
            </Link>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 1.35rem;
  text-transform: uppercase;
  color: #ddd;
  transition: 0.1s;
  &:hover,
  & .active {
    color: #f70;
  }
`;

export default HeaderMenu;
