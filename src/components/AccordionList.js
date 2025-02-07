import { useState } from "react";

function AccordionList({ children }) {
  const [list, setList] = useState([
    {
      title: "Quanto tempo dura o processo de recrutamento?",
      content:
        "O tempo médio de um processo de recrutamento pode variar de acordo com a complexidade da vaga, o nível hierárquico e a disponibilidade de candidatos. o prazo médio costuma ser de 15 a 45 dias . Porém, com nossa metodologia ágil e uso de ferramentas modernas, como inteligência artificial e avaliação comportamental, buscamos reduzir esse prazo, mantendo a qualidade e eficiência na entrega dos melhores.",
      isOpen: true,
    },
    {
      title: "Qual é o custo do serviço de recrutamento?",
      content:
        "O custo de um serviço de recrutamento varia de acordo com a complexidade da vaga, o nível hierárquico e a abrangência da busca. Para saber mais sobre nossos serviços e valores, entre em contato conosco.",
      isOpen: false,
    },
  ]);

  const handleOpen = (index) => {
    setList((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="faq-list">
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <i className="bx bx-help-circle icon-help"></i>{" "}
              <a
                href="/#"
                className="collapsed"
                onClick={() => handleOpen(index)}
              >
                {item.title}
                {item.isOpen ? (
                  <i className="bx bx-chevron-up icon-close"></i>
                ) : (
                  <i className="bx bx-chevron-down icon-show"></i>
                )}
              </a>
              <div
                id={`faq-list-${index}`}
                className={
                  item.isOpen ? "accordion-collapse collapse show" : "collapse"
                }
              >
                <p>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AccordionList;
