import { UserRoute } from "./UserRoute.js";


const routes = (app) => {
    app.use('/api/user', UserRoute)
}

export default routes;