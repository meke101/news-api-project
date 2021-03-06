const commentsRouter = require("express").Router();
const {
  patchComment,
  deleteComment
} = require("../controllers/commentsController");
const { methodNotAllowed } = require("../errors/errors");

commentsRouter
  .route("/:comment_id")
  .patch(patchComment)
  .delete(deleteComment)
  .all(methodNotAllowed);

commentsRouter.route("/").all(methodNotAllowed);

module.exports = { commentsRouter };
