import React from "react";

export default function Cookies() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px" }}>
      <h1>Política de cookies</h1>

      <p>
        Usamos cookies necesarias para el funcionamiento del sitio y, con tu permiso,
        cookies de analítica y marketing.
      </p>

      <h2>Categorías</h2>
      <ul>
        <li><strong>Necesarias</strong>: imprescindibles para que la web funcione.</li>
        <li><strong>Analítica</strong>: Google Analytics (solo si aceptas analítica).</li>
        <li><strong>Marketing</strong>: Google Ads y Meta Pixel (solo si aceptas marketing).</li>
      </ul>

      <h2>Cómo cambiar tu consentimiento</h2>
      <p>
        Puedes cambiar tu elección en cualquier momento desde el enlace “Cambiar cookies”
        en el pie de página.
      </p>
    </main>
  );
}
