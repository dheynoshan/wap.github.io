const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/',bookController.fetchAll);
router.post('/',bookController.save);
router.get('./:id', bookController.getBookById);
router.delete('./:id', bookController.deleteById);
router.put("/:id", bookController.update);

module.exports = router;
