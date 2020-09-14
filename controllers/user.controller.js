const UtilService = require('../services/util.service');
const JwtService = require('../services/jwt.service');


module.exports = {

    /** 
     * @api {post} /signup
     * @apiGroup Users
     * @apiName signupUser
     * @apiParam {String} [emial] user must need to provide the email
     * @apiParam {String} [password] user must need to provide the password
     * @apiParamExample {String} Request Body : 
     * {
     *  "email" : "abc@testing.com",
     *  "password" : "password123"
     * }
     * @apiSuccess {String} Msg Signup Successful!
     * @apiSuccessExample {json} Signup-Success-Response : 
     * HTTP/1.1 200Ok
     * {
     *  "msg" : "Signup Successful"
     * }
     * @apiExample {curl} Exampl usage:
     * curl -i http://localhost:4000/signup
     * @apiDescription User can create new account
     */
    async signup(ctx) {
        try {
            let { email, password } = ctx.request.body;

            if (!email) {
                ctx.throw(400, 'please provide the email');
            }

            if (!password) {
                ctx.throw(400, 'please provide the password');
            }

            const encryptedPassword = await UtilService.hashPassword(password);
            await ctx.db.User.create({
                email,
                password: encryptedPassword
            });

            ctx.body = 'Signup Successful'
        } 
        catch (err) {
            ctx.throw(500, err);
        }
    },
    /** 
     * @api {post} /login
     * @apiGroup Users
     * @apiName loginUser
     * @apiParam {String} [emial] user must need to provide the email
     * @apiParam {String} [password] user must need to provide the password
     * @apiParamExample {String} Request Body : 
     * {
     *  "email" : "abc@testing.com",
     *  "password" : "password123"
     * }
     * @apiSuccess {Object} Token   A Json web token to access protected route
     * @apiSuccessExample {json} Login Response : 
     * HTTP/1.1 200Ok
     * {
     *  "token" : "jsontokenhere"
     * }
     * @apiExample {curl} Exampl usage:
     * curl -i http://localhost:4000/login
     * @apiDescription User can login to the system
     */
    async login(ctx) {
        try {
            let { email, password } = ctx.request.body;

            if (!email) {
                ctx.throw(400, 'please provide the email');
            }
    
            if (!password) {
                ctx.throw(400, 'please provide the password');
            }
    
            const user = await ctx.db.User.findOne({ where: { email } });
    
            if (!user) {
                ctx.throw(400, 'unable to process request');
            }
    
            const matched = UtilService.comparePassword(password, user.password);
    
            if (matched) {
                const token = JwtService.issue({
                    payload: {
                        user: user.id
                    },
                }, '1 day');

                ctx.body = { token };
            } else {
                ctx.throw(500, 'invalid password');
            }
        } catch(err) {
            ctx.throw(500, err);
        }
    }
};