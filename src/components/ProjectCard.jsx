import { h } from 'preact';

const ProjectCard = ({ title, screenshot, description, demoHref, demoText }) => {
  const cardStyles = {
    backgroundColor: '#17222d',
    color: 'white',
    padding: '12px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    margin: '10px',
  };

  const linkStyles = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    marginTop: '8px',
    marginBottom: '8px',
  };

  const lightModeStyles = {
    color: 'white', // Set text color to light in light mode
  };

  return (
    <div className="project-card" style={{ ...cardStyles, ...lightModeStyles }}>
      <div className="project-screenshot" style={{ backgroundImage: `url(${screenshot})`, backgroundSize: 'cover', height: '200px' }}></div>
      <div className="project-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h3 className="project-title" style={{ margin: '8px 0', ...lightModeStyles }}>{title}</h3>
        <p className="project-description" style={{ margin: '8px 0', ...lightModeStyles }}>{description}</p>
        <a href={demoHref} className="project-link" style={linkStyles} target="_blank" rel="noopener noreferrer">
          {demoText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
