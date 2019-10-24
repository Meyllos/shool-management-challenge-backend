import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../types'
import { ParentAttributes } from './interface';

// instance
export type ParentInstance = Sequelize.Instance<ParentAttributes> & ParentAttributes

export const ParentInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const parent: SequelizeAttributes<ParentAttributes> = {
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
    student: {
      type: Sequelize.UUID
    },
    password: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.BIGINT,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isEmail: true
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
 return sequelize.define<ParentInstance, ParentAttributes>('parents', parent, {
    tableName: 'parents'
  })
};