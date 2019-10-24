"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceInit = function (sequelize, Sequelize) {
    var attendance = {
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
    return sequelize.define('attendances', attendance, {
        tableName: 'attendances'
    });
};
//# sourceMappingURL=attendance.model.js.map