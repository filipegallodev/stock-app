import React, { useEffect, useState } from "react";
import { Section, SectionHeader, SectionTitle } from "../styles/Section.styled";
import styled from "styled-components";
import CustomerCard from "./CustomerCard";
import { getCustomerList } from "@/functions/Customer";
import { ReloadButton } from "../styles/Button.styled";

const CustomerList = () => {
  const [list, setList] = useState<Array<Customer>>([]);

  useEffect(() => {
    getCustomers();
  }, []);

  async function getCustomers() {
    const result = await getCustomerList();
    if (result !== undefined) {
      setList(result);
    }
  }

  return (
    <Section className="animeLeft">
      <SectionHeader>
        <SectionTitle>Lista de Clientes</SectionTitle>
        <ReloadButton onClick={getCustomers}>Atualizar</ReloadButton>
      </SectionHeader>
      {list?.length > 0 ? (
        <List>
          {list.map((customer) => {
            return <CustomerCard customer={customer} key={customer.id} />;
          })}
        </List>
      ) : (
        <div>
          <p>Nenhum cliente encontrado.</p>
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

export default CustomerList;
