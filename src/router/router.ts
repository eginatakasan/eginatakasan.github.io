import { createBrowserRouter } from 'react-router-dom'
import ProjectsRoute from '../pages/Projects/Projects.route'
import AboutRoute from '../pages/About/About.route'

const router = createBrowserRouter([ProjectsRoute, AboutRoute])

export default router
