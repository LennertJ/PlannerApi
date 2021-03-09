const express = require('express');
const db = require('./db');
const Activity = require('./models/Activity');
const app = express();
const cors = require('cors');


app.get('/api', function (req, res){
    res.json({'Gebruik': 'doe een get Request via /Activity, /Transaction'})
});
app.post('/api/Activity', async function (req, res,next){
    console.log(req.body);
    let activity = new Activity({
        person : req.body.person,
        activity: req.body.activity,
        duration: req.body.duration,
        date: req.body.date,
        category: req.body.category
    });
    console.log(activity);
    try {
        res.send(activity._id);
        await activity.save().maxTime(500);
    }catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/api/Activity/:id', async function (req, res, next){
    await Activity.remove({id: req.params.id}, function (req, removed){
        if(err){
            return next(err);
        }
        res.json(removed);
    });
});
app.get('/api/activity/All', async function (req, res){
    const activity = await Activity.find().maxTime(5000);
    try {
        res.send(activity);
    }catch(err){
        res.status(500).send(err);
    }
});
app.get('/api/Activity/:date', async function (req, res){
    try{
        res.send( await activity.find(req.body.date ).maxTime(5000).exec());
    }catch(err){
        res.status(500).send(err);
    }
});
app.get('/api/Activity/:person', async function (req, res){
    try{
        res.send( await activity.find(req.body.person ).maxTime(5000).exec());
    }catch(err){
        res.status(500).send(err);
    }
});
module.exports = app;
