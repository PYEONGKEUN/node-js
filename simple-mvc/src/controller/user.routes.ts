import { Router, Request, Response } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);
  
    route.get('/',(req: Request, res: Response) =>{
        res.render('index');
    }
       
  );

//   route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
    
    
//     return res.json({ user: req.currentUser }).status(200);
//   });
};