import { Migration } from '@config/database/migration.provider';
import { UUIDV4 } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const databasePath = __dirname;

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.createTable('Payments', {
      PaymentId: {
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
      },
      Name: {
        type: DataType.STRING,
        allowNull: false
      },
      Method: {
        type: DataType.STRING,
        allowNull: false
      },
      Channel: {
        type: DataType.STRING,
        allowNull: false
      },
      Switch: {
        type: DataType.STRING,
        allowNull: false
      },
      CreatedAt: DataType.DATE,
      CreatedBy: DataType.STRING,
      UpdatedAt: DataType.DATE,
      UpdatedBy: DataType.STRING,
      DeletedAt: DataType.DATE,
      DeletedBy: DataType.STRING,
      StatusData: {
        type: DataType.STRING,
        defaultValue: "ACTIVE",
        allowNull: false,
      },
      IsDeleted: {
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    });
  
    await queryInterface.addIndex('Payments', ['PaymentId', 'Method', 'Channel']);
  });
};
export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.dropTable('Payments');
  });
};
