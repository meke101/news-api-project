const connection = require("../db/connection");

const updateComment = (id, increment) => {
  return connection
    .select("*")
    .from("comments")
    .where("comments.comment_id", "=", id)
    .increment("votes", increment)
    .returning("*")
    .then(result => {
      if (result.length === 0) {
        return Promise.reject({ status: 404, msg: "Not Found" });
      } else {
        return result;
      }
    });
};

const removeComment = id => {
  return connection
    .from("comments")
    .where("comment_id", id)
    .del()
    .then(result => {
      result;
      // if (comments === 0) {
      //   return Promise.reject({ status: 404, msg: "Comment not found" });
      // } else {
      //   return comments;
      // }
    });
};
module.exports = { updateComment, removeComment };
