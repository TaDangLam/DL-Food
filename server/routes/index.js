import { UserRoute } from "./UserRoute.js";
import { ProductRoute } from "./ProductRoute.js";
import { OptionRoute } from "./OptionProductRoute.js";
import { CategoryRoute } from "./CategoryRoute.js";


const routes = (app) => {
    app.use('/api/user', UserRoute);
    app.use('/api/product', ProductRoute);
    app.use('/api/option', OptionRoute);
    app.use('/api/category', CategoryRoute)
}

export default routes;