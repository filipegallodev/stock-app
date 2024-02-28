import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StockApp! - Venda | Informações extras",
  description: "StockApp! - Aplicação para controle de estoque.",
};

export default function VendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
