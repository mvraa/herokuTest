var express = require('express');
var router = express.Router();
var c = require('../controllers/mypage_controller')

/* GET add student form */
router.get('/add', c.addStudentForm);

/* GET add student form */
router.post('/add', c.addStudent);

/* GET users listing. */
router.get('/list', c.listStudents);

module.exports = router;
