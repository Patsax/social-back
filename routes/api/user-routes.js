const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// set up GET all users and POST new user at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up GET one, PUT (update), and DELETE user at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// set up PUT (add) and DELETE (remove) friend at /api/users/:id/:friendId
router
    .route('/friends/:id/:friendId')
    .put(addFriend)
    .delete(removeFriend);

module.exports = router;
