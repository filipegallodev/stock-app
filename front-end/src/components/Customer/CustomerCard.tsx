import React from "react";
import styled from "styled-components";

type Props = {
  customer: Customer;
};

const CustomerCard = ({ customer }: Props) => {
  return (
    <Card className="animeLeft">
      <Container>
        <Content>
          <CustomerHeader>
            <CustomerName>{customer.name}</CustomerName>
            <CustomerPhoneNumber>{customer.phoneNumber}</CustomerPhoneNumber>
          </CustomerHeader>
          <CustomerBody>
            <CustomerDescription>
              <div>
                Entrou pela última vez em{" "}
                {customer.lastLogin.toLocaleDateString()}
              </div>
              <div>
                Data da última compra:{" "}
                {customer.lastPurchase.toLocaleDateString()}
              </div>
              <div>Criado em {customer.createdAt.toLocaleDateString()}</div>
            </CustomerDescription>
          </CustomerBody>
        </Content>
      </Container>
      <StockButton>WhatsApp</StockButton>
    </Card>
  );
};

const Card = styled.div`
  box-shadow: 0px 0px 4px 2px #00000025;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.li`
  width: 90%;
  height: 120px;
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

const CustomerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CustomerName = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #444;
`;

const CustomerPhoneNumber = styled.span`
  background-color: #333;
  width: 160px;
  padding: 6px;
  border-radius: 6px;
  color: #f5f5f5;
  text-align: right;
  font-size: 0.95rem;
  font-weight: 600;
`;

const CustomerBody = styled.div``;

const CustomerDescription = styled.p`
  color: #555;
  font-size: 0.875rem;
`;

const StockButton = styled.button`
  background-color: #15da35;
  border: none;
  height: 120px;
  padding: 16px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #0fc72e;
    color: #fff;
  }
`;

export default CustomerCard;
