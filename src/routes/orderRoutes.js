import router from "../config/router";
import * as orderController from "../controller/orderController";

router.get("/getOrder/:orderNum", orderController.getOrder);
router.post("/createOrder", orderController.createOrder);
router.put("/updateOrder", orderController.updateOrder);
router.delete("/deleteOrder/:orderNum", orderController.deleteOrder);

module.exports = router;
