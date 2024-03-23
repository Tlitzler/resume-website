import React from 'react';
import LinkText from '../Atoms/LinkText';

interface Project {
    id: number;
    name: string;
    description: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Project 1',
        description: 'This is the first project',
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'This is the second project',
    },
    // Add more projects here
];

interface IProjectsProps {
    ref?: React.RefObject<HTMLDivElement>;
}

const Projects = ({ref}: IProjectsProps) => {
    return (
        <div ref={ref}>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
            <LinkText href="https://github.com/Tlitzler">
                Check out my GitHub
            </LinkText>
        </div>
    );
};

export default Projects;