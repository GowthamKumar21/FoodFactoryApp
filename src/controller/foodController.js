import Food from "../model/foodSchema";

export const getFood = (req, res) => {
  Food.findOne({ lotNumber: req.params.lotNumber }).exec((error, result) => {
    if (error) {
      res.send("Error in getting Food :" + error);
    } else {
      res.send("Food found " + result);
    }
  });
};

export const createFood = (req, res) => {
  const food = new Food(req.body);
  food.save((error, result) => {
    if (error) {
      res.send("Error in adding Food :" + error);
    } else {
      res.send("Food added " + result);
    }
  });
};

export const updateFood = (req, res) => {
  Food.updateOne({ lotNumber: req.body.lotNumber }, { $set: req.body }).exec(
    (error, result) => {
      if (error) {
        res.send("Error in updating Food :" + error);
      } else {
        res.send("Food updated");
      }
    }
  );
};

export const deleteFood = (req, res) => {
  Food.deleteOne({ lotNumber: req.params.lotNumber }).exec((error, result) => {
    if (error) {
      res.send("Error in deleting Food :" + error);
    } else {
      res.send("Food deleted");
    }
  });
};
