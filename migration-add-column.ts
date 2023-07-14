import { Migration } from '@config/database/migration.provider';
import { DataType } from 'sequelize-typescript';

export const databasePath = __dirname;

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addColumn(
      'ReminderVaccines',
      'VaccineCode',
      {
        type: DataType.STRING,
        allowNull: true,
      },
      { transaction },
    );
  });
};
export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeColumn(
      'ReminderVaccines',
      'VaccineCode',
      { transaction },
    );
  });
};
