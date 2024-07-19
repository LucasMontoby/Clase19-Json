const router = require("express").Router();
const productoController = require("../controller/productosController");

router.get("/", productoController.list);

router.get("/create", productoController.create);
router.post("/create", productoController.stock);

router.get("/:id/edit", productoController.edit);
router.put("/:id", productoController.update);

router.get("/:id/delete", productoController.delete);
router.delete("/:id", productoController.destroy);

module.exports = router;