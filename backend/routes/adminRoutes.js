const router = require('express').Router();
const { registerAdmin, loginAdmin } = require('../controllers/adminController');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

module.exports = router;