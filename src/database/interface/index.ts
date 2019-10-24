import * as Sequelize from 'sequelize';
import { StudentInstance } from '../../resources/student/student.model';
import { StudentAttributes } from '../../resources/student/interface';
import { ParentInstance } from '../../resources/parent/parent.model';
import { ParentAttributes } from '../../resources/parent/interface';
import { TeacherInstance } from '../../resources/teacher/teacher.model';
import { TeacherAttributes } from '../../resources/teacher/interface';

export interface DBInterface {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    Student: Sequelize.Model<StudentInstance, StudentAttributes>
    Parent: Sequelize.Model<ParentInstance, ParentAttributes>
    Teacher: Sequelize.Model<TeacherInstance, TeacherAttributes>
}