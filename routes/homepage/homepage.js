const express = require("express");
const router = express.Router();
const collum = require("../../shema/collum");
const task = require("../../shema/tasks");

/*------------------------------------ C O L U M N------------------------------------*/

//GET request
router.get("/collums", (req, res) => {
  collum.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//POST request
router.post("/collums", (req, res) => {
  const collums = new collum(req.body);
  collums.save();
  res.send("column saved");
});

//PUT request
router.put("/collums", (req, res) => {
  collum.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      res.send("column changed");
    }
  );
});

//PATCH request
router.patch("/collums", (req, res) => {
  collum.findByIdAndUpdate(
    req.body.sourceColumn._id,
    req.body.sourceColumn,
    { new: true },
    (err, todo) => {
      if (err) return res.status(500).send(err);
    }
  );
  collum.findByIdAndUpdate(
    req.body.destColumn._id,
    req.body.destColumn,
    { new: true },
    (err, todo) => {
      if (err) return res.status(500).send(err);
    }
  );
  res.send("column patched");
});

/*------------------------------------ T A S K ------------------------------------*/

//GET request
router.get("/tasks", (req, res) => {
  task.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//POST request
router.post("/tasks", (req, res) => {
  const tasks = new task(req.body);
  tasks.save().then((item) => {
    res.send("task saved");
  });
});

//PUT request
router.put("/tasks", (req, res) => {
  task.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, todo) => {
    if (err) return res.status(500).send(err);
    res.send("task changed");
  });
});

module.exports = router;
