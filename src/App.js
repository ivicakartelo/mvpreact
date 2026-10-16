
import React from "react";

export default function App() {
  const product = {
    name: "Modern React Development",
    description: "Learn MVP thinking, scalability and architecture.",
    price: 29,
    image: "/images/for_book2.jpg"
  };

  function buyBook() {
    const invoice = `INVOICE

Invoice:
INV-${Date.now()}

Seller:
Modern Web Academy

Product:
${product.name}

Total:
${product.price} EUR

PayPal:
paypal@example.com
`;

    const blob = new Blob([invoice], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "invoice.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <img src={product.image} alt="" width="100%" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>{product.price} EUR</h2>
      <button onClick={buyBook}>BUY</button>
      <p>Invoice downloads automatically.</p>
    </div>
  );
}