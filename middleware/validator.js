const Validator = require("fastest-validator");
const v = new Validator({
    secretKey: process.env.secretKey
});

const Validation = (cek, schema, res) => {
    const validationResponse = v.validate(cek, schema);
    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation Failed",
            errors: validationResponse,
        });
    }
};
module.exports = Validation;