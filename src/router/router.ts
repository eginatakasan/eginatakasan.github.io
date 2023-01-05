import { createHashRouter } from 'react-router-dom'
import AnimationsRoute from '../pages/Animations/Animations.route'
import HomeRoute from '../pages/Home/Home.route'

const router = createHashRouter([AnimationsRoute, HomeRoute])

export default router
