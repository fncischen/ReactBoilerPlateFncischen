const router = require('express').Router();
var cors = require('cors')

let arrayOfStrings = ["blah", "blah", "blah"]

router.get("/", (req,res) => {;
    try{
    res.status(200).json({arrayOfStrings});
    }
    catch{
        res.status(404).message("We can't return array!")
    }
})

router.post("/", (req,res) => {
    if (req.body) {
        
        arrayOfStrings.push(req.body);
        res.status(200).json({arrayOfStrings});
    }
    else {
        res.status(404).message("Missing a string!");
    }


})

module.exports = router; 