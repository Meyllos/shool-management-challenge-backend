import express from 'express'
import teacher_routers from '../resources/teacher/teacher.routes';
import student_routes from '../resources/student/student.routes';
import parent_routers from '../resources/parent/parent.routes';

const app = express();

app.use('/teacher', teacher_routers)
app.use('/attendance', teacher_routers)
app.use('/parents', parent_routers)
app.use('/students', student_routes)

export default app;