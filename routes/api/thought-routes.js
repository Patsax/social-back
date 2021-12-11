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
    .get(getAllThoughts);

router
    .route('/:userId')
    .post(addThought);

// /api/thought/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(addReaction)
    .delete(removeThought);


// /api/thought/reaction/<thoughId>/<reactionId>
router
    .route('/reaction/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;
