const { addbanList } = require("../functions/banlist_functions/add_banlist");
const { getAllBanList } = require("../functions/banlist_functions/get_banlist");
const {deleteBanList} = require("../functions/banlist_functions/delete_banlist")

module.exports = {
    getbanList: getAllBanList,
    addbanList: addbanList,
    deletebanlist: deleteBanList
}