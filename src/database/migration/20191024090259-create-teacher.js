'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teachers', {
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
      salary: {
        type: Sequelize.REAL,
      allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
      allowNull: false,
      },
      phone: {
        type: Sequelize.BIGINT,
      allowNull: false,
      unique: true
      },
      email: {
        type: Sequelize.STRING,
      allowNull: false,
      unique: true
      },
      courses: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
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
    return queryInterface.dropTable('teachers');
  }
};