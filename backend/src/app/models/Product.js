import Sequelize, { Model } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        desc: Sequelize.STRING,
        type: Sequelize.BOOLEAN,
        price: Sequelize.STRING,
        reserve: Sequelize.BOOLEAN,
        product_type: Sequelize.STRING,
        vakinha: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }
  static associate(models) {
    //a tab de agendamento, perecente ao model de usuario pq um usuario marcou o agendamento
    //tem que colocar o as(apelido), pq se n , n sabe qual é qual
    this.belongsTo(models.User, { foreignKey: "owner_id", as: "owner" });
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.File, { foreignKey: "image_id" });
  }
}

export default Product;
