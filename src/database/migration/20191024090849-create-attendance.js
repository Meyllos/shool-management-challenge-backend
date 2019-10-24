'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('attendances', {
       id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
      student: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      day: {
        type: Sequelize.DATE,
      allowNull: false,
      },
      course: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      teacher: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('attendances');
  }
};