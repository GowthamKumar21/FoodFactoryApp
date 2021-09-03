import router from "../config/router";
import * as ingredientsController from "../controller/ingredientsController";

router.get("/getIngredients/:lotNumber", ingredientsController.getIngredients);
router.post("/createIngredients", ingredientsController.createIngredients);
router.put("/updateIngredients", ingredientsController.updateIngredients);
router.delete(
  "/deleteIngredients/:lotNumber",
  ingredientsController.deleteIngredients
);

module.exports = router;
