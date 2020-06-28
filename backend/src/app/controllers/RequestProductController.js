import Product from '../models/Product';
import Files from '../models/File';
// lista os que cadastrei como pedidos
class RequestProducts {
  async index(req, res) {
    const products = await Product.findAll({
      where: { owner_id: req.userId, type: true, reserve: true },
      include: [{ model: Files, attributes: ['name', 'path', 'url'] }],
    });
    return res.json(products);
  }
}

export default new RequestProducts();
