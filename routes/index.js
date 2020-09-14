const Router = require('koa-router');
const router = new Router();

const { 
    ApplicationController, 
    CompanyController, 
    UserController,
    JobController 
} = require('../controllers');

const isAuthenticated = require('../policies/isAuthenticated');

// define all your routes
router.post('/companies', isAuthenticated, CompanyController.create);
router.get('/companies', isAuthenticated, CompanyController.find);
router.get('/companies/:id', isAuthenticated, CompanyController.findOne);
router.put('/companies/:id', isAuthenticated, CompanyController.update);
router.delete('/companies/:id', isAuthenticated, CompanyController.destroy);

router.get('/jobs', isAuthenticated, JobController.find);
router.post('/jobs', isAuthenticated, JobController.create);

router.post('/applications', ApplicationController.create);

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);


module.exports = router;
