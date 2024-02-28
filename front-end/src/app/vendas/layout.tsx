import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StockApp! - Vendas",
  description: "StockApp! - Aplicação para controle de estoque.",
};

export default function ClientesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
