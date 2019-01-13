import express from 'express';
import collection from './models';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        collection.find({}, (err, listing) => {
            res.json(listing);
        })
    })
router.route('/user/:id')
    .get((req, res) => {
        collection.findOne({ userId: req.params.id }, (err, listing) => {
            res.json(listing);
        })
    })

export default router;