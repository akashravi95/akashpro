import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'; // Ensure no unused imports
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.title} // Ensure each child in the list has a unique key
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
