import Order from "../model/orderSchema";
import User from "../model/userSchema";
import Food from "../model/foodSchema";

export const getOrder = (req, res) => {
  Order.findOne({ orderNum: req.params.orderNum })
    .populate("user")
    .populate("food")
    .exec((error, result) => {
      if (error) {
        res.send("Error in getting Order :" + error);
      } else {
        res.send("Order found " + result);
      }
    });
};

export const getAllOrdersOfUser = (req, res) => {
  User.findOne({ email: req.params.email }).exec((error, userResult) => {
    if (error) {
      res.send("User not Found : " + error);
    } else {
      Order.find({ user: userResult._id }).exec((error, result) => {
        if (error) {
          res.send("Error in getting Orders :" + error);
        } else {
          res.send(result.length + " Orders found " + result);
        }
      });
    }
  });
};

export const createOrder = (req, res) => {
  const userEmail = req.body.email;
  User.findOne({ email: req.body.email }).exec((error, userResult) => {
    if (error || userResult == null) {
      res.send("User not Found : " + error);
    } else {
      Food.findOne({ lotNumber: req.body.lotNumber }).exec(
        (error, foodResult) => {
          if (error || foodResult == null) {
            res.send("Food not Found : " + error);
          } else {
            req.body.user = userResult._id;
            req.body.food = foodResult._id;
            const order = new Order(req.body);
            order.save((error, result) => {
              if (error) {
                res.send("Error in creating Order :" + error);
              } else {
                res.send("Order created " + result);
              }
            });
          }
        }
      );
    }
  });
};

export const updateOrder = (req, res) => {
  Order.updateOne({ orderNum: req.body.orderNum }, { $set: req.body }).exec(
    (error, result) => {
      if (error) {
        res.send("Error in updating Order :" + error);
      } else {
        res.send("Order updated");
      }
    }
  );
};

export const deleteOrder = (req, res) => {
  Order.deleteOne({ orderNum: req.params.orderNum }).exec((error, result) => {
    if (error) {
      res.send("Error in deleting Order :" + error);
    } else {
      res.send("Order deleted");
    }
  });
};
