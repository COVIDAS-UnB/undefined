import Product from '../models/Product';
import Files from '../models/File';
// lista os  produtos que cadastrei como ofertante de ajude
class OfferecedProductController {
  async index(req, res) {
    const products = await Product.findAll({
      where: { owner_id: req.userId, type: false },
      include: [{ model: Files, attributes: ['name', 'path', 'url'] }],
    });
    return res.json(products);
  }
}

export default new OfferecedProductController();
