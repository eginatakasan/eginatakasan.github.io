import { createBrowserRouter } from 'react-router-dom'
import AnimationsRoute from '../pages/Animations/Animations.route'
import HomeRoute from '../pages/Home/Home.route'
import AboutRoute from '../pages/About/About.route'

const router = createBrowserRouter([HomeRoute, AboutRoute])

export default router
