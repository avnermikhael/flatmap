import { Migration } from '@config/database/migration.provider';
import { UUIDV4 } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const databasePath = __dirname;

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.changeColumn(
      'Appointments',
      'EventId',
      {
        type: DataType.STRING(255),
      },
      { transaction },
    );
  });
};
export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.changeColumn(
      'Appointments',
      'EventId',
      {
        type: DataType.STRING(50),
      },
      { transaction },
    );
  });
};
