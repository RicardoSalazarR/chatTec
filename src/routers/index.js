const authRoutes = require("./auth.routes");
const itemsRoutes = require("./items.routes")
const careerRoutes = require("./career.routes")
const authMiddleware = require("../middlewares/auth.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/items", itemsRoutes);
  app.use("/api/v1/careers", careerRoutes);

  // app.use("/api/v1/order",authMiddleware, orderRoutes);
};

module.exports = routerApi;
