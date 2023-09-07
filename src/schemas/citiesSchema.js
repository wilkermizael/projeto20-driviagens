import joi from "joi";

const schemaCities = joi.object({

    name : joi.string().min(2).max(50).required()
});

export default schemaCities