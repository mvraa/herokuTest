const students = [];

/* GET add student form */
module.exports.addStudentForm = function (req, res) {
    res.render('asdf', {
        title: 'view-add'
    });
};

/* POST add student form */
module.exports.addStudent = function (req, res) {
    let student = {};
    student.name = req.body.name;
    student.grade = req.body.grade; 
    student.test = req.body.test4;
    students.push(student);
    res.redirect('/mypage/list');
};

/* GET list of students */
module.exports.listStudents = function (req, res) {
    res.render('view-list', {
        title: 'view-list',
        students
    });
};