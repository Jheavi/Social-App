import { Router } from 'express';
import chatController from '../controllers/chatController';

const newRouter = () => {
  const router = Router();

  router.route('/').get(chatController.getMessages);

  return router;
};

export default newRouter();
