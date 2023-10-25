import React from 'react';
import { RouteObject } from 'react-router';
import HomeView from './Home.page';

const HomeRoute: RouteObject = {
  path: '/',
  index: true,
  element: <HomeView />,
};

export default HomeRoute;
