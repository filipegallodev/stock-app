import React, { useEffect, useState } from "react";
import { Section, SectionHeader, SectionTitle } from "../styles/Section.styled";
import styled from "styled-components";
import CustomerCard from "./CustomerCard";

const customers = [
  {
    id: "12345",
    name: "José da Silva",
    phoneNumber: "(99) 99999-9999",
    purchaseQuantity: 5,
    lastLogin: new Date("2024-02-23"),
    lastPurchase: new Date("2024-02-22"),
    createdAt: new Date("2024-02-05"),
  },
  {
    id: "12346",
    name: "Marcos Leonardo",
    phoneNumber: "(22) 22222-2222",
    purchaseQuantity: 5,
    lastLogin: new Date("2024-02-11"),
    lastPurchase: new Date("2024-01-05"),
    createdAt: new Date("2023-12-15"),
  },
  {
    id: "12347",
    name: "Raphael Vegas",
    phoneNumber: "(11) 11111-1111",
    purchaseQuantity: 5,
    lastLogin: new Date("2024-02-12"),
    lastPurchase: new Date("2024-01-30"),
    createdAt: new Date("2024-01-02"),
  },
];

const CustomerList = () => {
  const [list, setList] = useState<Array<Customer>>([]);

  useEffect(() => {
    getCustomers();
  }, []);

  async function getCustomers() {
    // const result = await getCustomerList();
    const result = customers;
    if (result !== undefined) {
      setList(result);
    }
  }

  return (
    <Section className="animeLeft">
      <SectionHeader>
        <SectionTitle>Lista de Clientes</SectionTitle>
      </SectionHeader>
      {list?.length > 0 ? (
        <List>
          {list.map((customer) => {
            return <CustomerCard customer={customer} key={customer.id} />;
          })}
        </List>
      ) : (
        <div>
          <p>Nenhum produto encontrado.</p>
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
