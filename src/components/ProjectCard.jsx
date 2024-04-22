"use client"
// ProjectCard.jsx
import { h, useState } from "preact";

const ProjectCard = ({ title, screenshot, description, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <img src={screenshot} alt={`${title} Screenshot`} className="project-screenshot" />
      <p className="project-description">{description}</p>
      <div className={`project-details-container ${showDetails ? 'show-details' : ''}`}>
        <ul className="project-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <button className="details-toggle" onClick={toggleDetails}>
        <i className={`fas ${showDetails ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <a href="#" className="project-link">View Project</a>
    </div>
  );
};

export default ProjectCard;
