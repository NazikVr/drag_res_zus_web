import scss from "../src/styles/global.scss"

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={`antialiased`} style={{ overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
