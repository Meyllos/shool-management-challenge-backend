import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../types'
import { TeacherAttributes } from './interface';
import Encrypt from '../../helpers/Encrypt';

// instance
export type TeacherInstance = Sequelize.Instance<TeacherAttributes> & TeacherAttributes

export const TeacherInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const teacher: SequelizeAttributes<TeacherAttributes> = {
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
    salary: {
      type: Sequelize.FLOAT
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        validate() {
          this.password = Encrypt.encrypt(this.password);
        }
      }
    },
    phone: {
      type: Sequelize.BIGINT
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    courses: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
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
  return sequelize.define<TeacherInstance, TeacherAttributes>('teachers', teacher, {
    tableName: 'teachers'
  })
};