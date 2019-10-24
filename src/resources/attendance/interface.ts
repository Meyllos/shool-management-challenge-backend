import { DataTypeUUID } from 'sequelize';

export interface AttendanceAttributes {
    id?: DataTypeUUID
    student: string
    day?: Date
    course: string,
    teacher: string,
    description: string
    createdAt?: Date
    updatedAt?: Date
}