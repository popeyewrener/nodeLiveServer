

const { addViewerList } = require("../functions/viewer_functions/add_viewer");
const { deleteViewerList } = require("../functions/viewer_functions/delete_viewer");
const { getAllViewerList } = require("../functions/viewer_functions/get_viewer");

module.exports = {
    add: addViewerList,
    remove:deleteViewerList,
    get:getAllViewerList
}