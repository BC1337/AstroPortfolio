import { h } from 'preact';

const ProjectCard = ({ title, screenshot, description, demoHref, demoText }) => {
  const cardStyles = {
    backgroundColor: '#17222d',
    color: 'white',
    padding: '12px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  const linkStyles = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    marginTop: 'auto',
    marginBottom: '8px', // Adjusted space between description and button
  };

  const imageStyles = {
    backgroundImage: `url(${screenshot})`,
    backgroundSize: 'cover',
    backgroundPosition: title === 'Fullstack Auth App' ? 'top' : 'center', // Adjust background position for Fullstack Auth App
    height: '100%',
    minHeight: '200px',
  };

  return (
    <div className="project-card" style={cardStyles}>
      <div className="project-screenshot" style={imageStyles}></div>
      <div className="project-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <h3 className="project-title" style={{ margin: '8px 0' }}>{title}</h3>
        <p className="project-description" style={{ margin: '4px 0' }}>{description}</p> {/* Reduce the top and bottom margin for the description */}
        <a href={demoHref} className="project-link" style={linkStyles} target="_blank" rel="noopener noreferrer">
          {demoText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
