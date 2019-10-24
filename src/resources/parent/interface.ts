import { DataTypeUUID } from 'sequelize';

export interface ParentAttributes {
    id?: DataTypeUUID
    firstname: string
    lastname: string
    student: string
    phone: number
    password: string
    email: string
    createdAt?: Date
    updatedAt?: Date
}