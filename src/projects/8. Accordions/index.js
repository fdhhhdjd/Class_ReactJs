import Accordion from './Accordion';
import { accordionData } from './utils/content';

const Project_8 = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Project_8;
