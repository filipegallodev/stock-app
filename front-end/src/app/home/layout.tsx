import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StockApp! - Página Inicial",
  description: "StockApp! - Aplicação para controle de estoque.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
