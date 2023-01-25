const { body } = require("express-validator")

const photoInsertValidation = () => {
    return [
        //title
        body("title").not().equals("undefined").withMessage("O título é obrigatório!").isString()
            .withMessage("O título é obrigatório!").isLength({ min: 3 })
            .withMessage("O título precisar ter no mínimo 3 caracteres"),
        // image
        body("image").custom((value, { req }) => {
            if (!req.file) {
                throw new Error("A imagem é obrigatória!")
            }
            return true
        })
    ]
}

const photoUpdateValidation = () => {
    return [
        body("title").optional().isString().withMessage("O título é obrigatório!")
            .isLength({ min: 3 }).withMessage("O título precisar ter no mínimo 3 caracteres"),
    ]
}

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
}