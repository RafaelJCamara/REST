const router = require("express").Router();
const accountController = require("../controllers/account");
const middleware = require("../middleware/options");

//define middleware to check HTTP verb
router.use(middleware.validateIncomingRequest);

router.route("/:id")
    .options(accountController.accountByIdOptions)
    .get(accountController.getAccountById);

module.exports = router;