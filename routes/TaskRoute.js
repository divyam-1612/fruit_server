const {Router} = require('express')
const router = Router()

const {getTasks, saveTasks, deleteTasks, updateTasks, getTaskById} = require("../controllers/TaskController")

router.get('/:id', getTaskById)
router.get('/', getTasks)
router.post('/', saveTasks)
router.put('/:id', updateTasks)
router.delete('/:id', deleteTasks)

module.exports = router