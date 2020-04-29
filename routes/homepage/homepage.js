const express = require("express");
const router = express.Router();
const collum=require('../../shema/collum')
const task=require('../../shema/tasks')



//collums post request
router.post('/collums',(req,res)=>{
  const collums = new collum(req.body);
    collums.save()
      .then(item => {
        res.send("collum saved");
      })
})
router.get('/collums',(req,res)=>{
    collum.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })})
router.put('/collums',(req,res)=>{

    collum.findByIdAndUpdate(
        req.body._id, req.body ,{new: true},(err, todo) => {

            if (err) return res.status(500).send(err);
            return res.send(todo.collum.items);
        }
    )})




//tsks post request
router.post('/tasks',(req,res)=>{
    const tasks = new task(req.body);
    tasks.save()
        .then(item => {
            res.send("task saved");
        })
})
router.put('/tasks',(req,res)=>{

    task.findByIdAndUpdate(
        req.body._id, req.body ,{new: true},(err, todo) => {

            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    )})
router.get('/tasks',(req,res)=>{
    task.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })})

module.exports = router;
