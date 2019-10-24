import CRUD from '../../helpers/CRUD'
import db from '../../database/models';
import { OK, BAD_REQUEST } from '../../constants/statuscode';

class Attendance extends CRUD {
    protected model = 'Attendance'


    public getAttendances = async (req: any, res: any) => {
        
    }

}

export default Attendance;