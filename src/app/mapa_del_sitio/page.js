'use client'
import { useState } from "react";
import Link from "next/link";
import PublicPageContainer from "../../components/containers/publicPageContainer";

const sections = [
  {
    title: "Inicio",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Carro", href: "/carro" },
      { label: "Contacto", href: "/contactanos" },
    ],
  },
  {
    title: "Información",
    links: [
      { label: "Métodos de Pago", href: "/metodo_de_Pago" },
      { label: "Envíos y Entregas", href: "/envio_y_entrega" },
      { label: "Devoluciones y Cambios", href: "/devoluciones_y_cambios" },
      { label: "Garantía de Igualación de Precios", href: "/garantia_de_igualacion_de_precios" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "/politica_de_privacidad" },
      { label: "Términos de Uso", href: "/terminos_de_uso" },
      { label: "Aviso Legal", href: "/aviso-legal" },
    ],
  },
];

export default function Sitemap() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <PublicPageContainer>
      <div className="max-w-4xl mx-auto bg-gray-50 py-9 px-6 my-5">
        <h2 className="text-4xl mb-5">Mapa del Sitio</h2>
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left text-2xl font-semibold flex justify-between items-center p-3 bg-gray-200 hover:bg-gray-300 rounded"
            >
              {section.title}
              <span>{openSections[index] ? "-" : "+"}</span>
            </button>
            {openSections[index] && (
              <ul className="mt-2 ml-4 list-disc">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-1">
                    <Link href={link.href} className="text-blue-600 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </PublicPageContainer>
  );
}
