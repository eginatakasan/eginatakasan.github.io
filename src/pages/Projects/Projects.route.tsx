import React from 'react';
import { RouteObject } from 'react-router';
import ProjectsView from './Projetcs.page';

const ProjectsRoute: RouteObject = {
  path: '/',
  index: true,
  element: <ProjectsView />,
};

export default ProjectsRoute;
