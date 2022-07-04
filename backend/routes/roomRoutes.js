const router = require('express').Router();
const { 
    getRoomOfHostel,
    getAllRooms,
    addNewRoom,
    deleteRoom
} = require('../controllers/roomController');

router.get('/hostel/:hostel', getRoomOfHostel);
router.get('/all', getAllRooms);
router.post('/', addNewRoom);
router.delete('/:_id', deleteRoom);

module.exports = router;