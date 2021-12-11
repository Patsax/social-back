const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thought
router
    .route('/')
    .get(getAllThoughts)

// /api/thought/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .post(addThought);

// /api/thought/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

// /api/thought/reaction/<thoughId>/<reactionId>
router
    .route('/reaction/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;
