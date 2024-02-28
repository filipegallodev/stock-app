import { Sale } from "@/types/sale";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

type Props = {
  sale: Sale;
};

const SaleCard = ({ sale }: Props) => {
  const router = useRouter();

  return (
    <Card>
      <CardHeaderContainer>
        <Container>
          <SaleHeaderInfo>
            <SaleNumber>Venda Nº {sale.id}</SaleNumber>
            <SaleCreatedAt>
              Venda em {sale.createdAt.toLocaleDateString()}
            </SaleCreatedAt>
          </SaleHeaderInfo>
        </Container>
        <MoreInfoButton onClick={() => router.push("/vendas/" + sale.id)}>
          Acessar Venda
        </MoreInfoButton>
      </CardHeaderContainer>
    </Card>
  );
};

const Card = styled.li`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px #00000025;
  overflow: hidden;
  height: auto;
`;

const CardHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const SaleHeaderInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const SaleNumber = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #444;
`;

const SaleCreatedAt = styled.span`
  color: #111;
  font-size: 1rem;
  font-weight: 600;
`;

const MoreInfoButton = styled.button`
  width: 20%;
  background-color: #1d4ed3;
  border: none;
  height: 60px;
  padding: 16px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #f5f5f5;
  font-weight: 600;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #1540b4;
    color: #fff;
  }
`;

export default SaleCard;
