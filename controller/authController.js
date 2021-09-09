var User = require ("../js_files/userModel")
var bcrypt = require("bcryptjs")

exports.signup = async (req, res) => {
    var {username, password} = req.body
    
     try{
        var hashpassword = await bcrypt.hash(password, 12)
        var newUser = await User.create({
            username,
            password: hashpassword,
        });
        req.session.user = newUser;
        res.status(201).json({
            status:'success',
            data: {
                user: newUser,
            },
    })
} catch(e) {
    console.log(e)
    res.status(400).json({
        status:"fail",
})
}
};

exports.login = async (req, res) => {
    var {username, password} = req.body
    try{
       var user = await User.findOne({username})
        
     if (!user) {
         return res.status(404).json({
             status:'fail',
             message: 'user not found'
         })
     }
     var isCorrect = await bcrypt.compare(password, user.password);
  
       if(isCorrect) {
           req.session.user = user
           res.status(200).json({
               status:'success'
           })
       } else {
           res.status(400).json({
               status:'fail',
               message: 'incorrect username or password'
           })
       }
        
} catch(e) {
    console.log(e)
    res.status(400).json({
        status:"fail",
})
}
};


