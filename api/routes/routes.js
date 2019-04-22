import express from 'express';
import { users, guilds, characters } from './models';

const router = express.Router();

/*
router.route('/')
    .get((req, res) => {
        collection.find({}, (err, listing) => {
            res.json(listing);
        })
    })
*/
router.route('/user/:id')
    .get((req, res) => {
        users.findOne({ userId: req.params.id }, (err, doc) => {
            res.json(doc);
        })
    })

router.route('/guild/:realm/:guild')
    .get((req, res) => {
        guilds.findOne({ realm: req.params.realm, guild: req.params.guild }, (err, doc) => {
            res.json(doc);
        })
    })

export default router;