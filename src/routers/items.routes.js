const { Router } = require("express");
const { getAll,postItem,getOwn,getById,getAvailable } = require("../controllers/items.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", getAll);
router.get("/available", getAvailable);
router.get("/own",authMiddleware,getOwn)
router.get("/:id",getById)
router.post("/",postItem);

module.exports = router;
