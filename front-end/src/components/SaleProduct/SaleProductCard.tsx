import React from "react";
import styled from "styled-components";

const SaleProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <Container>
        <ContentHeader>
          <ProductName>{product.name}</ProductName>
          <p>{product.amount} unidades</p>
        </ContentHeader>
        <p>
          Valor unitário:{" "}
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </Container>
    </Card>
  );
};

const Card = styled.li`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px #00000025;
  padding: 16px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductName = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
`;

export default SaleProductCard;
