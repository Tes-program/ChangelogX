import { Router } from "express";
import { body } from "express-validator";
import { handleInputError } from "./modules/middleware";
import {
  createProduct,
  getOneProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  getOneUpdate,
  getUpdates,
  deleteUpdate,
  updateUpdate,
} from "./handlers/update";

const router = Router();

/**
 * Product Routes
 */
router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.post(
  "/products",
  body("name").isString(),
  handleInputError,
  createProduct,
);
router.put(
  "/products/:id",
  body("name").isString(),
  handleInputError,
  updateProduct,
);
router.delete("/products/:id", deleteProduct);

/**
 * Update Routes
 */

router.get("/updates", getUpdates);
router.get("/updates/:id", getOneUpdate);
router.post(
  "/updates",
  body("title").exists(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate,
);
router.put(
  "/updates/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DELIVERED"]).optional(),
  body("version").optional(),
  updateUpdate,
);
router.delete("/updates/:id", deleteUpdate);

/**
 * UpdatePoints Routes
 */
router.get("/updatepoints");
router.get("/updatepoints/:id");
router.post(
  "/updatepoints",
  body("name").optional().isString(),
  body("description").optional().isString(),
);
router.put(
  "/updatepoints/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
);
router.delete("/updatepoints/:id");

export default router;
