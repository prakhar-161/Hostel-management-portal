const router = require('express').Router();
const {  
    getAllStaff,
    addNewStaff,
    deleteStaff,
    updateAvailability
} = require('../controllers/staffController');

router.get('/', getAllStaff);
router.post('/', addNewStaff);
router.delete('/:_id', deleteStaff);
router.patch('/availability/:_id', updateAvailability);

module.exports = router;