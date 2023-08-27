
const { createRoomComment } = require('../functions/comment_functions/createRoomComment');
const { getAllRoomComment } = require('../functions/comment_functions/getAllRoomComment');
module.exports = {
    
    postCreateComment: createRoomComment,
    getAllComment: getAllRoomComment

    
}