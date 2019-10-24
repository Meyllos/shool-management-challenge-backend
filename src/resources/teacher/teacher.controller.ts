import CRUD from '../../helpers/CRUD'
import db from '../../database/models';
import { OK, BAD_REQUEST, NOT_FOUND } from '../../constants/statuscode';
import SignedToken from '../../helpers/Token';
import Encrypt from '../../helpers/Encrypt';

class Teacher extends CRUD {
    protected model = 'Teacher'

     public login = async (req: any, res: any) => {
         try {
              const { email, password } = req.body;
        let teacher = await db[this.model].findOne({
            where: {
                email
            }
        })
        if (teacher) {
            const token = SignedToken.login(teacher.id)
            if (Encrypt.decrypt(password, teacher.dataValues.password)) {
                return res.status(OK).json({
                    status: OK,
                    message: 'success login',
                    token
                })
            }
            return res.status(BAD_REQUEST).json({
                    status: BAD_REQUEST,
                    message: 'Incorrect Credentials'
                });
        };
        return res.status(NOT_FOUND).json({
            status: NOT_FOUND,
            message: 'Account doesn\'t exit, create account' 
        })
         } catch (error) {
            return res.status(BAD_REQUEST).json({
            status: BAD_REQUEST,
            error
        }) 
         }
     }
}

export default Teacher;