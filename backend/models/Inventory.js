const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    // Schema definition
});

module.exports = mongoose.model('Inventory', inventorySchema);
