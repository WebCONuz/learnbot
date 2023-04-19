module.exports = class Models {
  static async UserModel(Sequelize, sequelize) {
    return await sequelize.define("users", {
      chat_id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
      },
      step: {
        type: Sequelize.DataTypes.SMALLINT,
        defaultValue: 1,
      },
      user_name: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: true,
      },
      user_phone: {
        type: Sequelize.DataTypes.STRING(13),
        allowNull: true,
      },
    });
  }
};
