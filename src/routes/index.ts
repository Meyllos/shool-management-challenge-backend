import express from 'express'
import teacher_routers from '../resources/teacher/teacher.routes';
import student_routes from '../resources/student/student.routes';
import parent_routers from '../resources/parent/parent.routes';
import attendance_routers from '../resources/attendance/attendance.routes';

const app = express();

// teachers routes
app.use('/teachers', teacher_routers)

// attendance
app.use('/attendances', attendance_routers)

// parent
app.use('/parents', parent_routers)

// student
app.use('/students', student_routes)

export default app;