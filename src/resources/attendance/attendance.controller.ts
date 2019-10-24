import CRUD from '../../helpers/CRUD'
import db from '../../database/models';
import { OK, BAD_REQUEST } from '../../constants/StatusCodes';

class Attendance extends CRUD {
    protected model = 'Attendance'

     public add = async (req: any, res: any) => {
         
     }
}

export default Attendance;