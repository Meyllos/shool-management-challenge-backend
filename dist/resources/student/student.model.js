"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInit = function (sequelize, Sequelize) {
    var student = {
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
    };
    return sequelize.define('students', student, {
        tableName: 'students'
    });
};
//# sourceMappingURL=student.model.js.map