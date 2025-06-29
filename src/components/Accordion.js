import {useState} from 'react';

function Accordion({list, onClick}) {
  console.log (list);

  const [isOpen, setIsOpen] = useState (false);
  return (
    <div className="faq-list">
      <ul>
        {list.map ((item, index) => {
          return (
            <li key={index}>
              <i className="bx bx-help-circle icon-help" />{' '}
              <a
                data-bs-toggle="collapse"
                className="collapsed"
                onClick={() => setIsOpen (!isOpen)}
              >
                {item.title}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id={`faq-list-${index}`}
                className={
                  isOpen ? 'accordion-collapse collapse show' : 'collapse'
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

export default Accordion;
