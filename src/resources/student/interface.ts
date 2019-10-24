import { DataTypeUUID } from 'sequelize';

export interface StudentAttributes {
    id?: DataTypeUUID
    firstname: string
    lastname: string
    yearofstudy: '1' | '2' | '3' | '4' | '5' | '6'
    createdAt?: Date
    updatedAt?: Date
}