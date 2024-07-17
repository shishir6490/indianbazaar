const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, inventoryController.addItem);
router.get('/', authMiddleware, inventoryController.getInventory);

module.exports = router;
