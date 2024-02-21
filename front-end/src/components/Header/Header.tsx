import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <Container>
      <Content>
        <Title>StockApp!</Title>
        <HeaderMenu />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1d4ed3;
  height: 120px;
  padding: 16px 48px;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
`;

export default Header;
