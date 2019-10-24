"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Encrypt_1 = __importDefault(require("../../helpers/Encrypt"));
exports.TeacherInit = function (sequelize, Sequelize) {
    var teacher = {
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
                validate: function () {
                    this.password = Encrypt_1.default.encrypt(this.password);
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
    return sequelize.define('teachers', teacher, {
        tableName: 'teachers'
    });
};
//# sourceMappingURL=teacher.model.js.map