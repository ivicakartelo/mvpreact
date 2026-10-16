
import React, { useState } from "react";

export default function App() {
  const [invoice, setInvoice] = useState(null);
  const product = {
    name: "Modern React Development",
    description: "Learn MVP thinking, scalability and architecture.",
    price: 29,
    image: "/images/for_book2.jpg"
  };

  function buyBook() {
    setInvoice({
      number: "INV-" + Date.now(),
      seller: "Modern Web Academy",
      product: product.name,
      total: product.price
    });
  }

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <img src={product.image} alt="" width="100%" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>{product.price} EUR</h2>
      <button onClick={buyBook}>BUY</button>
      {invoice && (
        <div style={{ marginTop: 20, padding: 20, border: "1px solid #ccc" }}>
          <h2>INVOICE</h2>
          <p>Invoice: {invoice.number}</p>
          <p>Seller: {invoice.seller}</p>
          <p>Product: {invoice.product}</p>
          <p>Total: {invoice.total} EUR</p>
          <p>PayPal: paypal@example.com</p>
        </div>
      )}
    </div>
  );
}