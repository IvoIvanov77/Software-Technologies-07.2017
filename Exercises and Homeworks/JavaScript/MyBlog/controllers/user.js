const User = require('./../models/User');
const encryption = require('./../utilities/encryption');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },

    registerPost: (req, res) => {
        let userData = req.body;

        let user = User.findOne({email: userData.email}).then(user =>{
            let errMsg = '';
            if(user){
                errMsg = 'User with the same email exists';
            }else if (userData.password !== userData.repeatedPassword){
                errMsg = 'Passwords do not match';
            }

            if(errMsg){
                userData.error = errMsg;
                res.render('user/register', userData);
            }else{
                let salt = encryption.generateSalt();
                let password = encryption.hashPassword(userData.password, salt);

                let userObject = {
                    email: userData.email,
                    fullName: userData.fullName,
                    passwordHash: password,
                    salt: salt
                };

                User.create(userObject).then(user =>{
                    req.logIn(user, (err) => {
                        if(err){
                            userData.error = err.message;
                            res.render('user/register', userData);
                            return;
                        }
                        res.redirect('/');
                    });
                });
            }
        });
    },

    loginGet: (req, res)=> {
        res.render('user/login');
    },

    loginPost: (req, res)=> {
        let userData = req.body;

        let user = User.findOne({email: userData.email}).then(user => {
            let errMsg = '';
            if (!user) {
                errMsg = 'User do not exists';
            } else  {

                if(!user.authenticate(userData.password)){
                    errMsg = 'Invalid password';
                }
            }

            if (errMsg) {
                userData.error = errMsg;
                console.log(errMsg);
                res.render('user/login', userData);
            } else {
                req.logIn(user, (err) => {
                    if(err){
                        userData.error = err.message;
                        res.render('user/login', userData);
                        return;
                    }
                    res.redirect('/');
                });
            }

        });
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    }
};