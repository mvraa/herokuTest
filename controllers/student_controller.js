const students = [];

/* GET add student form */
module.exports.addStudentForm = function (req, res) {
    res.render('viewAdd', {
        title: 'students-add'
    });
};

/* POST add student form */
module.exports.addStudent = function (req, res) {
    let student = {};
    student.name = req.body.name;
    student.grade = req.body.grade; 
    student.test = req.body.test4;
    students.push(student);
    res.redirect('/students/list');
};

/* GET list of students */
module.exports.listStudents = function (req, res) {
    res.render('viewList', {
        title: 'students-list',
        students
    });
};