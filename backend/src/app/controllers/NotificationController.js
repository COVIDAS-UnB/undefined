import Notification from "../schema/Notifications";
import User from "../models/User";

class NotificationController {
  async index(req, res) {
    const Log = await User.findOne({
      where: {
        id: req.userId
      }
    });
    if (!Log) {
      return res.status(400).json({
        error: "Somente os proprietarios podem ver suas notificações"
      });
    }

    const notifications = await Notification.find({
      user: req.userId
    })
      .sort({ createdAt: "desc" })

      .limit(20);
    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },

      { new: true }
    );
    return res.json(notification);
  }
}
export default new NotificationController();
