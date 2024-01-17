import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "StockApp! - Página Inicial",
  description: "StockControl App - Aplicação para controle de estoque.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
