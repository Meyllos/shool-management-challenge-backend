import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../types'
import { AttendanceAttributes } from './interface';

// instance
export type AttendanceInstance = Sequelize.Instance<AttendanceAttributes> & AttendanceAttributes

export const AttendanceInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const attendance: SequelizeAttributes<AttendanceAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    student: {
      type: Sequelize.UUID
    },
    class_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    day: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
    teacher: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    course: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
     createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  };
  return sequelize.define<AttendanceInstance, AttendanceAttributes>('attendances', attendance, {
    tableName: 'attendances'
  })
};