'use client'

import { useState } from "react";
import PublicPageContainer from "../../components/containers/publicPageContainer";

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left focus:outline-none"
        >
          <span className="text-xl font-medium">{question}</span>
          <span className="text-2xl">{isOpen ? "−" : "+"}</span>
        </button>
        {isOpen && (
          <div className="mt-2 text-gray-700">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  };

export default function faq() {

    const sections = [
        {
          title: "General",
          faqs: [
            {
              question: "¿Qué es Vendalia.es?",
              answer:
                "Vendalia.es es un marketplace dedicado a conectar a creadores y compradores en España. Aquí encontrarás tanto productos físicos como digitales, hechos a mano o diseñados de forma original, que reflejan la creatividad y la tradición artesanal de nuestro país."
            },
            {
              question: "¿Quiénes pueden vender en Vendalia.es?",
              answer:
                "Cualquier creador o artesano que desee compartir su trabajo puede abrir una tienda en nuestra plataforma. Desde arte digital hasta productos físicos, vendemos una amplia variedad de artículos pensados para satisfacer diferentes gustos y necesidades."
            }
          ]
        },
        {
          title: "Productos y Entregas",
          faqs: [
            {
              question: "¿Qué tipo de productos se venden?",
              answer:
                "En Vendalia.es encontrarás productos físicos (como joyería, ropa, decoración y más) y productos digitales (como ilustraciones, diseños y patrones). Todos nuestros productos son seleccionados cuidadosamente para garantizar la calidad y autenticidad."
            },
            {
              question: "¿Dónde realizan entregas?",
              answer:
                "Actualmente, realizamos entregas únicamente dentro de España. Estamos trabajando para ampliar nuestra cobertura en el futuro, pero por ahora, los envíos se realizan exclusivamente en territorio español."
            }
          ]
        },
        {
          title: "Tarifas y Pagos",
          faqs: [
            {
              question: "¿Cuáles son las tarifas de uso de la plataforma?",
              answer:
                "Se aplican tarifas generales sobre las ventas realizadas a través de Vendalia.es. Estas tarifas están diseñadas para cubrir los costos de mantenimiento de la plataforma y brindar un servicio seguro y de calidad a todos nuestros usuarios. Consulta nuestra sección de tarifas para más detalles."
            },
            {
              question: "¿Qué métodos de pago están disponibles?",
              answer:
                "Aceptamos diversos métodos de pago seguros para que tu experiencia de compra sea rápida y cómoda. Encontrarás opciones de pago con tarjeta de crédito, débito y otros medios digitales."
            }
          ]
        },
        {
          title: "Devoluciones y Reembolsos",
          faqs: [
            {
              question: "¿Cuál es la política de devoluciones y reembolsos?",
              answer:
                "Queremos que estés completamente satisfecho con tu compra. Si tienes algún inconveniente con un producto, puedes solicitar una devolución o reembolso. Ponte en contacto con el vendedor a través del chat de pedidos o mediante nuestro correo de soporte para gestionar el proceso de manera rápida y eficaz."
            },
            {
              question: "¿Qué debo hacer si recibo un producto defectuoso o incorrecto?",
              answer:
                "En caso de recibir un producto defectuoso o que no coincide con la descripción, contacta con el vendedor lo antes posible. Si la situación no se resuelve, nuestro equipo de soporte estará disponible para ayudarte a gestionar una solución adecuada."
            }
          ]
        },
        {
          title: "Atención al Cliente",
          faqs: [
            {
              question: "¿Cómo puedo contactar con el soporte de Vendalia.es?",
              answer:
                "Puedes comunicarte con nuestro equipo de atención a través de dos canales: 1) Correo Electrónico: Envíanos un mensaje a marketing@vendalia.es incluyendo tu número de pedido y el motivo de tu consulta. 2) Chat de Pedidos: Utiliza el chat integrado para comunicarte directamente con el vendedor de tu pedido."
            },
            {
              question: "¿Cuál es el horario de atención al cliente?",
              answer:
                "Nuestro equipo de soporte está disponible de lunes a viernes, de 9:00 a 18:00 (hora de España). Fuera de este horario, responderemos a tu consulta lo antes posible el siguiente día laborable."
            }
          ]
        },
        {
          title: "Otras Preguntas",
          faqs: [
            {
              question: "¿Puedo vender productos en otros idiomas?",
              answer:
                "Sí, aunque Vendalia.es es un marketplace orientado al mercado español, puedes incluir descripciones en varios idiomas para llegar a un público más amplio. Sin embargo, es importante que la información principal y las políticas de venta estén claras en español."
            },
            {
              question: "¿Qué debo hacer si tengo otra pregunta o necesito más información?",
              answer:
                "Si tienes cualquier otra duda o consulta, no dudes en contactarnos a través de nuestros canales de soporte. Estamos aquí para ayudarte y asegurarnos de que tu experiencia en Vendalia.es sea lo más satisfactoria posible."
            }
          ]
        }
      ];
  return (
    <PublicPageContainer>
      <div className="max-w-7xl mx-auto py-9 px-6 my-5">
        <h2 className="text-3xl lg:text-5xl mb-3">Preguntas Frecuentes (FAQ)</h2>

        {sections.map((section, idx) => (
        <div key={idx} className="my-8">
          <h3 className="text-3xl mb-3">{section.title}</h3>
          <div>
            {section.faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      ))}
        
      </div>
    </PublicPageContainer>
  );
}
