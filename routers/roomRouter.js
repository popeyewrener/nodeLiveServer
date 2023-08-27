const path = require('path');
const {createRoom, getRoombyIDtoken, getallrooms} = require("../services/roomService");
const { roomgetById } = require('../functions/room_functions/roomgetById');
const { getAllRoom } = require('../functions/room_functions/getAllRoom');
const { createRoomFun } = require('../functions/room_functions/createRoom');
module.exports = {

    get: roomgetById,
getall: getAllRoom,
post: createRoomFun

}