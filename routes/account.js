const router = require("express").Router();
const accountController = require("../controllers/account");

router.route("/:id")
    .get(accountController.getAccountById);

module.exports = router;