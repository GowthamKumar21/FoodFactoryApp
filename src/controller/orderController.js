import Order from "../model/orderSchema";

export const getOrder = (req, res) => {
  Order.findOne({ orderNum: req.params.orderNum }).exec((error, result) => {
    if (error) {
      res.send("Error in getting Order :" + error);
    } else {
      res.send("Order found " + result);
    }
  });
};

export const createOrder = (req, res) => {
  const order = new Order(req.body);
  order.save((error, result) => {
    if (error) {
      res.send("Error in adding Order :" + error);
    } else {
      res.send("Order added " + result);
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
