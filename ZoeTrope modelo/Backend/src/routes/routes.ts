import userController from "../controllers/userController";
import postController from "../controllers/postController";
import { Router } from "express";
import passport from 'passport';

const routes = Router();

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.get ('/users/search', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/user', passport.authenticate('jwt', {session: false}), userController.delete);
routes.post('/user/:id/follow', userController.follow);
routes.post('/user/:id/unfollow', userController.unfollow);
routes.get('/user/:id/followers', userController.showFollowers);
routes.get('/user/:id/following', userController.showFollowing);


routes.post('/post', postController.create);
routes.get('/posts/:id', postController.index);
routes.get('/post/:id', postController.show);
routes.put('/post/:id', postController.update);
routes.delete('/post/:id', postController.delete);
routes.post('/post/:id/like', postController.like);
routes.post('/post/:id/dislike', postController.dislike);

export default routes;