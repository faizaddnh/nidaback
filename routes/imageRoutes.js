const express = require('express');
const Image = require('../model/model');

const imageRouter = express.Router();

imageRouter.get('/', async (req, res) => {
    const images = await Image.find();
    res.send(images);
});

imageRouter.get('/:id', async (req, res) => {
    const image = await Image.findOne({ id: req.params.id });
    if (image) {
        res.send(image);
    } else {
        res.status(404).send({ message: 'image not found' })
    }
});

imageRouter.post('/', (req, res) => {
    try {
        const newImage = new Image(req.body);
        newImage.save();
    } catch (error) {
        console.log(error.message);

    }
});

imageRouter.delete('/:id', async (req, res)=>{
    try{
        const deleteUser = await user.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');

    }
    catch(err){
        res.json(err);
    }
});

module.exports = imageRouter;