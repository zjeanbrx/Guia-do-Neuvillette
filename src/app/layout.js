import "./globals.css";

export const metadata = {
  title: "Neuvillette - Sun",
  description: "Pior guia do Neuvillette já criado",
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
