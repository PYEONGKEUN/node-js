import { Router } from 'express';
import user from './user.routes';


// guaranteed to get dependencies
export default () => {
	const app = Router();
	user(app);
	return app
}