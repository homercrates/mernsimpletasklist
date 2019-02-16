const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

//Route GET api/items
//@desc Get ALL Items
//@access Public 
router.get('/', (req,res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items))
});

//Route POST api/items
//@desc create an Item
//@access Public 
router.post('/', (req,res) => {
    const newItem = new Item({
        name: req.body.name,
    });
    // now .save to DB
    newItem.save().then(item => res.json(item));
});

//Route DELETE api/items/:id
//@desc Delete an Item
//@access Public 
// remember : is place holder so '/:id' could be items/3204394239239
router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;