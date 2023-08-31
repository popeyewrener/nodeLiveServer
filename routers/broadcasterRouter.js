
const { addBroadcasterList } = require("../functions/broadcaster_functions/add_broadcaster");
const { deleteBroadasterList } = require("../functions/broadcaster_functions/delete_broadcaster");
const { getAllBroadcasterList } = require("../functions/broadcaster_functions/get_broadcaster");

module.exports = {
    getbroadcasterlist : getAllBroadcasterList,
    addbroadcasterlist : addBroadcasterList,
    deletebroadcastlist: deleteBroadasterList
}