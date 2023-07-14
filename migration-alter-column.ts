import { Migration } from '@config/database/migration.provider';
import { UUIDV4 } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const databasePath = __dirname;

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addIndex('OrderPayment', ['PaymentUserExpiredDate'], {
      transaction,
      where: {
        IsDeleted: false,
        DeletedAt: null,
      },
    });
  });
};
export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeIndex('OrderPayment', ['PaymentUserExpiredDate'], {
      transaction,
      where: {
        IsDeleted: false,
        DeletedAt: null,
      },
    });
  });
};
