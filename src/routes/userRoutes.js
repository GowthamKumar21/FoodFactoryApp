import router from "../config/router";
import * as userController from "../controller/userController";

router.post("/login", userController.userLogin);
router.post("/signup", userController.userSignup);
router.put("/updatePassword", userController.updatePassword);
router.put("/updateUser", userController.updateUser);
router.put("/updateUserStatus", userController.updateUserStatus);

module.exports = router;
