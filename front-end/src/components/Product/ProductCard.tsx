import React from "react";
import styled from "styled-components";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Container>
        <ProductID>ID: {product.customId}</ProductID>
        <Content>
          <ProductHeader>
            <ProductName>{product.name}</ProductName>
            <ProductAmount>{product.amount}</ProductAmount>
          </ProductHeader>
          <ProductBody>
            <ProductDescription>
              {/* {product.description} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              praesentium quod Lorem ipsum dolor sit amet
            </ProductDescription>
          </ProductBody>
        </Content>
      </Container>
      <StockButton>Estoque</StockButton>
    </Card>
  );
};

const Card = styled.div`
  box-shadow: 0px 0px 4px 2px #00000025;
  border-radius: 10px;
  overflow: hidden;
  max-width: 260px;
  width: 100%;
`;

const Container = styled.li`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  padding: 8px;
`;

const Content = styled.div`
  height: 40%;
  width: 100%;
`;

const ProductHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ProductID = styled.span`
  font-size: 0.625rem;
`;

const ProductName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #444;
`;

const ProductAmount = styled.span`
  width: 72px;
  background-color: #333;
  padding: 6px;
  border-radius: 6px;
  color: #f5f5f5;
  text-align: right;
  font-size: 0.95rem;
  font-weight: 600;
`;

const ProductBody = styled.div``;

const ProductDescription = styled.p`
  color: #555;
  font-size: 0.875rem;
`;

const StockButton = styled.button`
  background-color: #1d4ed3;
  border: none;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #f5f5f5;
  font-weight: 500;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #1540b4;
  }
`;

export default ProductCard;
