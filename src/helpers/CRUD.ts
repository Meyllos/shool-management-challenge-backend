import db from "../database/models"
import { OK, BAD_REQUEST, NOT_FOUND } from '../constants/statuscode';

class CRUDOperations {

    protected model: string = ''

    public createOne = async (req: any, res: any) => {
        try {
            console.log(req.body);
            const result = await db[this.model].create(req.body)
            return res.status(OK).json({
                status: OK,
                data: result
            })
        } catch (error) {
            // if (error.parent) {
            //     return res.status(BAD_REQUEST).json({
            //     status: BAD_REQUEST,
            //     error: error.errors[0].message
            // })
            // } 
            // else if(error.errors[0].message) {
            //     return res.status(BAD_REQUEST).json({
            //     status: BAD_REQUEST,
            //     error: 'InValid Reference'
            //     })
            // } else {
            return res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            })
            // }
        }
    }
    public readOne = async (req: any, res: any) => {
        try {
            const { id } = req.params
            const result = await db[this.model].findOne({
                where: {
                    id
                }
            })
            if (result) {
                return res.status(OK).json({
                status: OK,
                result
            })
            }
            return res.status(NOT_FOUND).json({
                status: NOT_FOUND,
                message: 'Not Found'
            })
        } catch (error) {
             return res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            })
        }
    }
    public update = async (req: any, res: any) => {
        try {
            const { id } = req.params
            console.log(id);
            const data = req.body
            
            const result = await db[this.model].update(
                { ...data },
                {where: {
                    id
                }}
            )
            console.log(result);
            
            if (result) {
                return res.status(OK).json({
                status: OK,
                result
            })
            }
            return res.status(NOT_FOUND).json({
                status: NOT_FOUND,
                message: 'Not Found'
            })
        } catch (error) {
             return res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            })
        }
    }
    public delete = async (req: any, res: any) => {
        try {
            const { id } = req.params
            console.log(id);
            const data = req.body
            
            const result = await db[this.model].destroy({
                where: {
                    id
                }
            }
            )
            console.log(result);
            
            if (result) {
                return res.status(OK).json({
                status: OK,
                result
            })
            }
            return res.status(NOT_FOUND).json({
                status: NOT_FOUND,
                message: 'Not Found'
            })
        } catch (error) {
             return res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            })
        }
    }
    public getMany = async (req: any, res: any, next: any) => {
        try {
            const result = await db[this.model].findAll({
                where: {
                    
                }
            })
            res.status(OK).json({
                status: OK,
                result
            })
        } catch (error) {
            
        }
    }
}
export default CRUDOperations;