import { DataTypeUUID } from 'sequelize';

export interface AttendanceAttributes {
    id?: DataTypeUUID
    student: string
    day?: Date
    class_level: number
    course: string,
    teacher: string,
    description: string
    createdAt?: Date
    updatedAt?: Date
}