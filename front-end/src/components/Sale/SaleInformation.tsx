import React, { useEffect } from "react";
import { Section, SectionHeader, SectionTitle } from "../styles/Section.styled";
import { BackButton } from "../styles/Button.styled";
import { useParams, useRouter } from "next/navigation";

const SaleInformation = () => {
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    // getSaleInfo();
  }, []);

  async function getSaleInfo() {
    // const result = await getSaleInformation();
    // if (result !== undefined) {
    //   setList(result);
    // }
  }

  return (
    <Section className="animeLeft">
      <SectionHeader>
        <SectionTitle>Informações da Venda</SectionTitle>
        <BackButton onClick={() => router.back()}>Voltar</BackButton>
      </SectionHeader>
    </Section>
  );
};

export default SaleInformation;
