import React, { useEffect, useState } from "react";
import {
  Section,
  SectionCaption,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "../styles/Section.styled";
import { BackButton } from "../styles/Button.styled";
import { useParams, useRouter } from "next/navigation";
import { getSaleInformation } from "@/functions/Sale";
import { SaleInformation } from "@/types/sale";
import SaleProductList from "../SaleProduct/SaleProductList";

const SaleInformation = () => {
  const router = useRouter();
  const { id } = useParams();
  const [data, setData] = useState<SaleInformation>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getSaleInfo() {
      const result = await getSaleInformation(id.toString());
      setData(result);
      setLoading(false);
    }
    getSaleInfo();
  }, [id]);

  return (
    <Section className="animeLeft">
      <SectionHeader>
        <SectionTitle>Informações da Venda - {id.toString()}</SectionTitle>
        <BackButton onClick={() => router.back()}>Voltar</BackButton>
      </SectionHeader>
      {data ? (
        <div>
          <SectionContent>
            <SectionCaption>Dados principais</SectionCaption>
            <p>
              Realizada em {new Date(data.sale.createdAt).toLocaleDateString()}
            </p>
            <p>
              Cliente: {data.customer.firstName + " " + data.customer.lastName}
            </p>
            <p>
              Valor Total:{" "}
              {data.sale.totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </SectionContent>
          <SectionContent>
            <SectionCaption>Produtos adquiridos</SectionCaption>
            <div>
              <SaleProductList productList={data.productList} />
            </div>
          </SectionContent>
        </div>
      ) : loading ? (
        <div>
          <p>Carregando informações...</p>
        </div>
      ) : (
        <div>
          <p>Nenhuma informação encontrada sobre a Venda.</p>
        </div>
      )}
    </Section>
  );
};

export default SaleInformation;
