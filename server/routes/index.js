import { UserRoute } from "./UserRoute.js";
import { ProductRoute } from "./ProductRoute.js";
import { ImagesRoute } from "./Upload.js";

const routes = (app) => {
    app.use('/api/user', UserRoute);
    app.use('/api/product', ProductRoute);
    app.use('/api/images', ImagesRoute);
}

export default routes;