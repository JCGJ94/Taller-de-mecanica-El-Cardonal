import React from "react";

export default function Privacidad() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px" }}>
      <h1>Política de privacidad</h1>

      <p>
        En esta página debes explicar qué datos recoges (formulario, EmailJS),
        para qué los usas (responder solicitudes/presupuestos), base legal,
        plazos de conservación, derechos RGPD y contacto.
      </p>

      <h2>Responsable</h2>
      <p>Auto Mecánica El Cardonal (datos fiscales / contacto).</p>

      <h2>Datos que tratamos</h2>
      <ul>
        <li>Datos del formulario de contacto/presupuesto (nombre, email/teléfono, mensaje).</li>
        <li>Datos técnicos mínimos (logs del servidor/hosting si aplica).</li>
      </ul>

      <h2>Encargados / terceros</h2>
      <ul>
        <li>EmailJS (envío de emails del formulario).</li>
        <li>Google (si aceptas analítica/marketing: GA4/Ads).</li>
        <li>Meta (si aceptas marketing: Pixel).</li>
      </ul>

      <h2>Derechos</h2>
      <p>Acceso, rectificación, supresión, oposición, limitación y portabilidad.</p>
    </main>
  );
}
