'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parents', {
      id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
      firstname: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      student: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      phone: {
        type: Sequelize.BIGINT,
      allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      allowNull: false,
      unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parents');
  }
};