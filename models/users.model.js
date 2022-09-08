const { model, Schema } = require("mongoose");

const userschema = new Schema({
  firstName: {
    type: string,
    required: true,
  },
  middleName: string,
  lastName: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
  },
  password: {
    type: string,
    required: true,
  },
});

module.exports = model(user, userschema);
