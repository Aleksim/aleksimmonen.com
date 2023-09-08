import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want
import LottieAnimation from './lottieanimation';
import animationData from '../images/animation_ll6mv7vs.json';
import '../style.css';

const TimelineItem = ({ date, description, details, isFirstItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <li>
      <span className="timeline--date">{date}</span>
      <div className="timeline--circle">
        {isFirstItem ? <LottieAnimation animationData={animationData} /> : <i></i>} 
      </div>

      <div>
      <div className='timeline--content' onClick={handleToggle}>
        <div className='timeline--description'>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className='timeline--icon'>
          <FontAwesomeIcon 
            icon={isOpen ? faTimes : faChevronDown} 
            size="sm"
            style={{ color: 'lightgray' }}
          />
      </div>


        </div>
          {isOpen && <p className='timeline--details'>{details}</p>}
        </div>
      </div>
    </li>
  );
};

// ... rest of the code

const Timeline = ({ items }) => (
  <ul className="timeline timeline-vertical">
    {items.map((item, index) => (
      <TimelineItem
        key={index}
        isFirstItem={index === 0}
        date={item.date}
        description={item.description}
        details={item.details}
      />
    ))}
  </ul>
);

export default Timeline;
