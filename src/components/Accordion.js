import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function VAccordion({ index, title, content }) {
  const [tab] = useState(0);
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={index}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{content}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default VAccordion;
