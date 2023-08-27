const path = require('path');
const {createUser} = require("../services/userService");
const { mainget } = require('../functions/main_functions/get');
const { main_post } = require('../functions/main_functions/main_post');
module.exports = {
    get: mainget,
    post: main_post
}