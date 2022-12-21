import { createBrowserRouter } from 'react-router-dom'
import AnimationsRoute from '../views/Animations/Animations.route'
import HomeRoute from '../views/Home/Home.route'

const router = createBrowserRouter([
  AnimationsRoute,
  HomeRoute
])

export default router
