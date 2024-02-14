import React from "react";
import styled from "styled-components";

type Props = {
  product: Product;
};

const ProductListCard = ({ product }: Props) => {
  return (
    <Card>
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductID>ID: {product.customId}</ProductID>
      </div>
      <ProductAmount>Disponível: {product.amount}</ProductAmount>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 80px;
  padding: 4px 36px;
  box-shadow: 0px 0px 4px 2px #00000025;
  border-radius: 10px;
`;

const ProductID = styled.span`
  font-size: 0.75rem;
`;

const ProductName = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

const ProductAmount = styled.p`
  font-size: 1.125rem;
`;

export default ProductListCard;
