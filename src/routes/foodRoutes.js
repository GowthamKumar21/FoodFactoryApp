import router from "../config/router";
import * as foodController from "../controller/foodController";

router.get("/getFood/:lotNumber", foodController.getFood);
router.post("/createFood", foodController.createFood);
router.put("/updateFood", foodController.updateFood);
router.delete("/deleteFood/:lotNumber", foodController.deleteFood);

module.exports = router;
