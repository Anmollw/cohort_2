const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    
    res.json({
        message : "Admin created successfully"
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
        username,
        password
    })

    if(user){
        const token= jwt.sign({
            username 
        },JWT_SECRET);
    
        res.json({
            token : token
        }); 
    } else{
        res.status(403).json({
            message : "Incorrect email and password"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation login
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    console.log("Full request body:", req.body);
    
    const newcourse= await Course.create({
        title,
        description,
        imageLink,
        price
    })

    console.log(newcourse);
    res.json({
        message : "Course created successfully", courseId : newcourse._id
    })
 
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allcourses= await Course.find({})
    res.json({
        courses : allcourses
    })

});

module.exports = router;