const {
  makePayment,
  createPayment,
  createCustomer,
  retrieveCustomer,
} = require("./service");
const { updateUser } = require("../users/service");

async function handlerPayment(req, res) {
  const { paymentMethod, amount } = req.body;

  req.user = "bui@mail.com"
  console.log("amount", amount)
  


  try {
    // let customer = await retrieveCustomer(req.user?.payment?.customerId);

    // if (!customer) {
    //   // create customer
    //   customer = await createCustomer(req.user, paymentMethod);
    // }

    // // Update user with customer info
    // const userToUpdate = {
    //   payment: {
    //     customerId: customer.id,
    //     cards: [
    //       {
    //         ...paymentMethod.card,
    //         paymentMethodId: paymentMethod.id,
    //       },
    //     ],
    //   },
    // };
    // // eslint-disable-next-line no-underscore-dangle
    // await updateUser(req.user._id, userToUpdate);

    const payment = await makePayment({ paymentMethod, amount});

    // // save payment to db
    // const registeredPayment = {
    //   refId: payment.id,
    //   description: payment.description,
    //   value: payment.amount,
    //   currency: payment.currency,
    //   userId: req.user.id,
    // };
    // await createPayment(registeredPayment);

    res.json(payment);
  } catch (error) {
    // console.log("error", error);
    res.status(500).json(error);
  }
}

module.exports = {
  handlerPayment,
};
