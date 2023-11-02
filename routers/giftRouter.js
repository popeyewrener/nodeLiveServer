const { getAllRoomGifts } = require("../functions/gift_functions/getAllRoomGift");
const { createGiftandAddtoRoom } = require("../functions/gift_functions/createGift");

module.exports = {
    getgifts: getAllRoomGifts,
    addGifttoRoom:createGiftandAddtoRoom
}