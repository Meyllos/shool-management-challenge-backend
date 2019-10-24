import { DataTypeUUID } from 'sequelize';

export interface TeacherAttributes {
    id?: DataTypeUUID
    firstname: string
    lastname: string
    salary: string
    phone: number
    password: string
    email: string
    courses: Array<string>
    createdAt?: Date
    updatedAt?: Date
}