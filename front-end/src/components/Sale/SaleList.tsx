import React, { useEffect, useState } from "react";
import { Section, SectionHeader, SectionTitle } from "../styles/Section.styled";
import styled from "styled-components";
import SaleCard from "./SaleCard";
import { ReloadButton } from "../styles/Button.styled";
import { Sale } from "@/types/sale";
import { getSaleList } from "@/functions/Sale";

const SaleList = () => {
  const [list, setList] = useState<Array<Sale>>([]);

  useEffect(() => {
    getSales();
  }, []);

  async function getSales() {
    const result = await getSaleList();
    if (result !== undefined) {
      setList(result);
    }
  }

  return (
    <Section className="animeLeft">
      <SectionHeader>
        <SectionTitle>Histórico de Vendas</SectionTitle>
        <ReloadButton onClick={getSales}>Atualizar</ReloadButton>
      </SectionHeader>
      {list?.length > 0 ? (
        <List className="animeLeft">
          {list.map((sale) => {
            return <SaleCard sale={sale} key={sale.id} />;
          })}
        </List>
      ) : (
        <div>
          <p>Nenhuma venda encontrada.</p>
        </div>
      )}
    </Section>
  );
};

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export default SaleList;
