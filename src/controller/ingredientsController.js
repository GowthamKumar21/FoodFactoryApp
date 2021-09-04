import Ingredients from "../model/ingredientsSchema";

export const getIngredients = (req, res) => {
  Ingredients.findOne({ lotNumber: req.params.lotNumber }).exec(
    (error, result) => {
      if (error || result == null) {
        res.send("Error in getting Ingredients :" + error);
      } else {
        res.send("Ingredients found " + result);
      }
    }
  );
};

export const getLessAvailableIngredients = (req, res) => {
  let lessAvailable = [];
  Ingredients.find({}).exec((error, result) => {
    if (error || result == null) {
      res.send("Error in getting Ingredients :" + error);
    } else {
      lessAvailable = result.filter(
        (Ingredients) =>
          Ingredients.availableQuantity < Ingredients.thresholdQuantity
      );
      res.send(
        lessAvailable.length +
          " Ingredients have less Availability " +
          lessAvailable
      );
    }
  });
};

export const getIngredientsOfVendor = (req, res) => {
  Ingredients.find({ vendorName: req.params.vendorName }).exec(
    (error, result) => {
      if (error || result == null) {
        res.send("Error in getting Ingredients :" + error);
      } else {
        res.send("Vendor have " + result.length + " Ingredients " + result);
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
