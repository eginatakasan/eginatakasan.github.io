import React from 'react';
import { RouteObject } from 'react-router';
import AboutPage from './About.page';

const AboutRoute: RouteObject = {
  path: '/about',
  element: <AboutPage />,
};

export default AboutRoute;
