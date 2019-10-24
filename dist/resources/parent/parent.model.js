"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Encrypt_1 = __importDefault(require("../../helpers/Encrypt"));
exports.ParentInit = function (sequelize, Sequelize) {
    var parent = {
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
            type: Sequelize.STRING,
            validate: {
                validate: function () {
                    this.password = Encrypt_1.default.encrypt(this.password);
                }
            }
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
    };
    return sequelize.define('parents', parent, {
        tableName: 'parents'
    });
};
//# sourceMappingURL=parent.model.js.map