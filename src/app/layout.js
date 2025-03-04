import "./globals.css";

export const metadata = {
  title: "Guia do Neuvillette", // Título exibido na aba do navegador
  description: "Aprenda a usar seu Neuvillette", // Descrição da página
  keywords: ["neuvillette", "guia", "build", "artefatos", "status", "armas"], // Palavras-chave para SEO
  authors: [{ name: "Sun" }], // Autor da página
  openGraph: {
    title: "Guia do Neuvillette",
    description: "Aprenda a usar seu Neuvillette",
    url: "https://neuvillette-by-sun.vercel.app/", // URL canônica da página
    siteName: "Sun guias",
    images: [
      {
        url: "/geral/Banner.png", // Imagem para preview em redes sociais
        alt: "Banner",
      },
    ],
    locale: "pt_BR", // Localização (ex.: português do Brasil)
    type: "website", // Tipo de conteúdo
  },
  twitter: {
    card: "summary_large_image", // Tipo de card do Twitter
    title: "uia do Neuvillette",
    description: "Aprenda a usar seu Neuvillette",
    image: "/geral/Banner.png", // Imagem para Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
