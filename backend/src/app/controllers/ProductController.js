import Product from '../models/Product';
import File from '../models/File';
import User from '../models/User';
import Notification from '../schema/Notifications';

// cadastro de produtos
class ProductController {
  //mostra todos os produtso
  async index(req, res) {
    const products = await Product.findAll({
      where: { reserve: false },
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });
    return res.json(products);
  }
  // cadastra os produtos
  async store(req, res) {
    const {
      title,
      desc,
      type,
      price,
      image_id,
      telegram,
      product_type,
    } = req.body;

    if (product_type == 3) {
      return res.json({ error: "you can't donate money" });
    }
    const product = await Product.create({
      owner_id: req.userId,
      title,
      desc,
      type,
      price,
      image_id,
      telegram,
      product_type,
    });
    return res.json(product);
  }

  // detalhes de um produto
  async details(req, res) {
    const product = await Product.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });
    return res.json(product);
  }
  // na hora que reservo um produto

  async select(req, res) {
    const product = await Product.findByPk(req.params.id);
    const user_id = product.user_id;
    const owner_id = product.owner_id;
    await product.update({
      reserve: true,
      user_id: req.userId,
    });
    const reformuledProduct = await Product.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name', 'email', 'telegram', 'whatsapp'],
          include: [
            {
              model: File,
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });
    const user = await User.findByPk(user_id);
    const owner = await User.findByPk(owner_id);

    if (product.type === true) {
      await Notification.create({
        content: `O  : ${user.name} decidiu te ajudar.
         Segue o contato dele: ${owner.whatsapp}`,
        user: owner.id,
      });
    }
    if (product.type === false) {
      await Notification.create({
        content: `O  : ${user.name} Se interessou pelo seu produto
          Segue o contato dele ${owner.whatsapp}`,
        user: owner.id,
      });
    }

    return res.json(reformuledProduct);
  }
}

export default new ProductController();
