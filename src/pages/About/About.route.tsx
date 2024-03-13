import React from 'react';
import { RouteObject } from 'react-router';
import AboutPage from './About.page';

const AboutRoute: RouteObject = {
  path: '/',
  index: true,
  element: <AboutPage />,
};

export default AboutRoute;
