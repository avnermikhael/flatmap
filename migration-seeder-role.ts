import { Migration } from '@config/database/migration.provider';
import { Role } from '@models/core/Role';
import { RoleModule } from '@models/core/RoleModule';
import { RoleModulePermission } from '@models/core/RoleModulePermission';
import { PERMISSION, ROLE } from '@utils/enum';
import { ACCESS_PERMISSION } from '@utils/enum/access-permission.enum';
import { MODULE_PERMISSION } from '@utils/enum/module.permission.enum';
import { UUIDV4 } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const databasePath = __dirname;

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    const dkv0 = await Role.findOne({
      attributes: ['roleId'],
      where: {
        name: ROLE.DKV0,
      },
    });

    if (dkv0) {
      await RoleModule.destroy({
        where: {
          roleId: dkv0.roleId,
        },
        force: true,
        transaction,
      });

      const pm = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.PATIENT_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const amvd = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.AREA_MANAGEMENT_VACCINATING_DOCTOR,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: amvd.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: amvd.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: amvd.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: amvd.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: amvd.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const cm = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.COMMUNITY_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: cm.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: cm.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: cm.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: cm.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: cm.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const dm = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.DAYOPS_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: dm.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: dm.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: dm.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: dm.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: dm.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const dcm = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.DOCTOR_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: dcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: dcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: dcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: dcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: dcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const om = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.ORDER_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const um = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.USER_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: um.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: um.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: um.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: um.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: um.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const dkcm = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.DKV_CHAT_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const amdk = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.AREA_MANAGEMENT_DKV,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: amdk.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: amdk.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: amdk.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: amdk.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: amdk.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );
    }
  });
};
export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.sequelize.transaction(async (transaction) => {
    const dkv0 = await Role.findOne({
      attributes: ['roleId'],
      where: {
        name: ROLE.DKV0,
      },
    });

    if (dkv0) {
      await RoleModule.destroy({
        where: {
          roleId: dkv0.roleId,
        },
        force: true,
        transaction,
      });

      const pm = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.PATIENT_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: pm.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const om = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.ORDER_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: om.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );

      const dkcm = await RoleModule.create(
        {
          roleId: dkv0.roleId,
          module: MODULE_PERMISSION.DKV_CHAT_MANAGEMENT,
        },
        { transaction },
      );
      await RoleModulePermission.bulkCreate(
        [
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.MANAGE,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.ACCESS,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.CREATE,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.EDIT,
          },
          {
            roleModuleId: dkcm.roleModuleId,
            permissionName: ACCESS_PERMISSION.DELETE,
          },
        ],
        { transaction },
      );
    }
  });
};
