import CRUD from '../../helpers/CRUD'
import db from '../../database/models';
import { OK, BAD_REQUEST } from '../../constants/StatusCodes';

class Student extends CRUD {
    protected model = 'Student'
}

export default Student;