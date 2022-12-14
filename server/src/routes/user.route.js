const router = require("express").Router();
const UserController = require("../controllers/UserController");
router.get("/get_user", UserController.getUser);
router.get("/get_users", UserController.getUsers);
router.get("/get_suggestion_users", UserController.getSuggestionUsers);
router.get("/get_users_without_me", UserController.getUsersWithoutMe);
router.put("/edit", UserController.editUser);
router.put("/change_avatar", UserController.changeAvatar);
router.put("/update_follow", UserController.updateFollow);
router.put("/update_unfollow", UserController.updateUnfollow);
router.get("/search_users", UserController.getSearchUsers);
module.exports = router;
