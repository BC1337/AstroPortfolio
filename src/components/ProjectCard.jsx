import { h, useState, useEffect } from 'preact/hooks';

const ProjectCard = ({ title, screenshot, description, demoHref, demoText, themeMode = 'light' }) => {
  const [currentThemeMode, setCurrentThemeMode] = useState(themeMode);

  // Update theme mode when it changes
  useEffect(() => {
    setCurrentThemeMode(themeMode);
  }, [themeMode]);

  const isLightMode = themeMode === 'light';

  const cardStyles = {
    backgroundColor: isLightMode ? '#EAEAEA' : '#333', // Light mode: Light gray, Dark mode: Dark gray
    color: 'white',
    padding: '12px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: isLightMode ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none', // Add shadow only in light mode
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

  const titleStyles = {
    margin: '8px 0',
    color: isLightMode ? 'black' : 'white', // Set font color to black in light mode, white in dark mode
  };
  
  const descriptionStyles = {
    margin: '4px 0',
    color: isLightMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)', // Set font color to a slightly lighter shade in light mode, slightly darker shade in dark mode
  };

  return (
    <div className="project-card" style={cardStyles}>
      <div className="project-screenshot" style={imageStyles}></div>
      <div className="project-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <h3 className="project-title" style={titleStyles}>{title}</h3>
        <p className="project-description" style={descriptionStyles}>{description}</p> {/* Reduce the top and bottom margin for the description */}
        <a href={demoHref} className="project-link" style={linkStyles} target="_blank" rel="noopener noreferrer">
          {demoText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;