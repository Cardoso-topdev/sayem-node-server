const express = require("express");

const isAuth = require("../middleware/isAuth");
const pagesController = require("../controllers/pages");

const router = express.Router();

// GET /pages
router.get("/", isAuth, pagesController.getPages);

// GET /pages/url/{url}
router.put("/url", pagesController.getMetaData);

// GET /pages/{id}
router.get("/:pageId", isAuth, pagesController.getPage);

// POST /pages
router.post("/", isAuth, pagesController.postPage);

// POST /pages2
router.post("/postpage", isAuth, pagesController.postPage2);

// PUT /pages/{id}
router.put("/:pageId", isAuth, pagesController.putPage);

// DELETE /pages/{id}
router.delete("/:pageId", isAuth, pagesController.deletePage);

// POST /pages/images
router.post("/images", pagesController.postImage);

// DELETE /pages/images/{name}
router.delete("/images/:imageName", pagesController.deleteImage);

module.exports = router;
