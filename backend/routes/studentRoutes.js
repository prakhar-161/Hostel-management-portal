const router = require('express').Router();
const {
    addNewStudent,
    getAllStudents,
    updateAvailability,
    deleteStudent,
    getStudentWithId,
    getStudentWithRoom,
    getStudentWithBatch
} = require('../controllers/studentController');

router.post('/', addNewStudent);
router.get('/all', getAllStudents);
router.patch('/availability', updateAvailability);
router.delete('/:studentId', deleteStudent);
router.get('/studentId/:studentId', getStudentWithId);
router.get('/room/:room', getStudentWithRoom);
router.get('/batch/:batch', getStudentWithBatch);

module.exports = router;
