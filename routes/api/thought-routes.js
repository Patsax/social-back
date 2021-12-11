const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thoughtController');

// set up GET all thoughts at /api/thought
router
    .route('/')
    .get(getAllThoughts);

// set up POST new thought at /api/thought/<userId>
router
    .route('/:userId')
    .post(addThought);

// set up GET one thought, PUT (add) reaction to a thought, and DELETE (remove) a thought at /api/thought/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(addReaction)
    .delete(removeThought);

// set up DELETE (remove) a reaction from a thought at /api/thought/reaction/<thoughId>/<reactionId>
router
    .route('/reaction/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;
