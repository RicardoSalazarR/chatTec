const { Router } = require("express");
const { getAll,getByPk } = require("../controllers/career.controller");

const router = Router();

router.get("/", getAll);
router.get("/:id", getByPk);

module.exports = router;
