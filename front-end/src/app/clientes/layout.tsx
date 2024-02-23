import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StockApp! - Clientes",
  description: "StockApp! - Aplicação para controle de estoque.",
};

export default function ClientesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
