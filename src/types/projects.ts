// Define the Project type
interface Project {
    title: string;
    description: string;
    url: string;
    type: string;
}

// Fetch and render projects
async function fetchAndRenderProjects() {
    const response = await fetch('https://dlittl02.github.io/dlittl02-portfolio/data/projects.json'); 
    if (!response.ok) {
        console.error(`Failed to load projects: ${response.status}`);
        return;
    }

    const projects: Project[] = await response.json(); 

    const portfolioGrid = document.getElementById('projects-grid');
    if (!portfolioGrid) {
        console.error("Portfolio grid container not found!");
        return;
    }


    projects.forEach((project: Project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-item'; 

        const title = document.createElement('h2');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = project.type;


        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(link);

  
        portfolioGrid.appendChild(projectCard);
    });
}


document.addEventListener('DOMContentLoaded', fetchAndRenderProjects);

