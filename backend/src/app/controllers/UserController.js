import User from '../models/User';
import puppeteer from 'puppeteer';
class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    async function Authentication() {
      const url = 'https://sig.unb.br/sigaa/mobile/touch/login.jsf';
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto(url);
      await page.waitFor('input[name="form-login:j_id_jsp_1333299719_2"]');
      await page.type(
        'input[name="form-login:j_id_jsp_1333299719_2"]',
        req.body.mwLogin || null,
        {
          delay: 100,
        }
      );
      await page.type(
        'input[name="form-login:j_id_jsp_1333299719_3"]',
        req.body.mwPass || null,
        {
          delay: 100,
        }
      );
      await page.keyboard.press(String.fromCharCode(13));
      try {
        const authenticated = await page.waitFor(
          'span[id="form-portal-discente:matricula"]',
          { timeout: 1000 }
        );
        if (authenticated) {
          return true;
        }
      } catch (e) {
        return false;
      }
    }
    const authentic = await Authentication();
    const {
      name,
      email,
      phone,
      whatsapp,
      telegram,
      lat,
      long,
      password,
    } = req.body;
    const user = await User.create({
      name,
      email,
      phone,
      whatsapp,
      telegram,
      lat,
      long,
      password,
      student_unb: authentic,
    });
    return res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      whatsapp: user.whatsapp,
      telegram: user.telegram,
      lat: user.lat,
      long: user.long,
      student_unb: user.student_unb,
    });
  }
}

export default new UserController();
