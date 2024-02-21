import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StockApp! - Estoque",
  description: "StockApp! - Aplicação para controle de estoque.",
};

export default function EstoqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
