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
        users.findOne({ id: req.params.id }, (err, doc) => {
            res.json(doc);
        })
    })
    .post((req, res) => {
        users.findOneAndUpdate({id: req.params.id}, {...req.body}, { upsert: true }, (err, doc) => {
            res.json(doc);
        })
    })

//TODO: Test this endpoint to do partial updates of records.  See if it overwrites the whole document.
router.route('/characters/update')
    .post((req, res) => {
        // Takes an array of characters and updates each by realm and name

        //FIXME: update with a check to delete characters that are marked as such.  (check for a {delete: true})
        let updatedCharacters = req.body.map((char) => {
            return characters.findOneAndUpdate({realm: char.realm, name: char.name}, {...char}, { upsert: true }, (err, doc) => {
                return doc;
            });
        });
        Promise.all(updatedCharacters).then ( (arr) => {
            res.json(arr)
        })
        //FIXME: This doesnt work.  Wait for req.body.map() to complete and send the results back to redux.
    })

router.route('/guild/:realm/:guild')
    .get((req, res) => {
        guilds.findOne({ realm: req.params.realm, guild: req.params.guild }, (err, doc) => {
            res.json(doc);
        })
    })

export default router;