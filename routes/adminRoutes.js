const express = require('express');
const { register, login, getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/assignments', auth, getAssignments);
router.post('/assignments/:id/accept', auth, acceptAssignment);
router.post('/assignments/:id/reject', auth, rejectAssignment);

module.exports = router;
