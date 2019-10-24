import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../types'
import { StudentAttributes } from './interface';

// instance
export type StudentInstance = Sequelize.Instance<StudentAttributes> & StudentAttributes

export const StudentInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const student: SequelizeAttributes<StudentAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 100],
          msg: 'was that a name'
        },
      }
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 100],
          msg: 'was that a name'
        },
      }
    },
    yearofstudy: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        max: 6,
        min: 1,
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }
  return sequelize.define<StudentInstance, StudentAttributes>('students', student, {
    tableName: 'students'
  })
};