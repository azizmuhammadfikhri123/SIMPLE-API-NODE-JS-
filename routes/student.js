const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.post('/', StudentController.create);
router.put('/:id', StudentController.update);
router.post('/:id', StudentController.findById);
router.get('/', StudentController.findAll);
router.delete('/:id', StudentController.delete);

module.exports = router;