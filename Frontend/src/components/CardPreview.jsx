import { BASE_URL } from "../config/api";
import Template1Classic from "./templates/Template1Classic";
import Template2Minimal from "./templates/Template2Minimal";
import Template3Modern from "./templates/Template3Modern";
import "./CardPreview.css";

const CardPreview = ({ cardData }) => {
  const templateId = cardData.theme?.templateId || 'template1';

  // Select template based on templateId
  const renderTemplate = () => {
    switch (templateId) {
      case 'template1':
        return <Template1Classic cardData={cardData} />;
      case 'template2':
        return <Template2Minimal cardData={cardData} />;
      case 'template3':
        return <Template3Modern cardData={cardData} />;
      default:
        return <Template1Classic cardData={cardData} />;
    }
  };

  return renderTemplate();
};

export default CardPreview;
