import Ingredients from "../model/ingredientsSchema";

export const getIngredients = (req, res) => {
  Ingredients.findOne({ lotNumber: req.params.lotNumber }).exec(
    (error, result) => {
      if (error) {
        res.send("Error in getting Ingredients :" + error);
      } else {
        res.send("Ingredients found " + result);
      }
    }
  );
};

export const createIngredients = (req, res) => {
  const ingredients = new Ingredients(req.body);
  ingredients.save((error, result) => {
    if (error) {
      res.send("Error in adding Ingredients :" + error);
    } else {
      res.send("Ingredients added " + result);
    }
  });
};

export const updateIngredients = (req, res) => {
  Ingredients.updateOne(
    { lotNumber: req.body.lotNumber },
    { $set: req.body }
  ).exec((error, result) => {
    if (error) {
      res.send("Error in updating Ingredients :" + error);
    } else {
      res.send("Ingredients updated");
    }
  });
};

export const deleteIngredients = (req, res) => {
  Ingredients.deleteOne({ lotNumber: req.params.lotNumber }).exec(
    (error, result) => {
      if (error) {
        res.send("Error in deleting Ingredients :" + error);
      } else {
        res.send("Ingredients deleted");
      }
    }
  );
};
