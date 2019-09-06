module.exports = function(app,bodyParser){
  var users = require('./models/users');

app.post('/api/auth', function(req,res){

    if(!req.body) {
        return res.sendStatus(400);
    }
    //  const st = new users('Saad','02/01/1996','23','saad@gmail.com','123',false);
    //  const st2 = new users('John','02/01/1996','23','john@gmail.com','123',false);
    //  const st3 = new users('Smith','02/01/1996','23','smith@gmail.com','123',false);
    // var customer = [{st},{st2},{st3}];
    var user = [{username:"Saad",birthdate:'02/01/1996',age:'23',email:'saad@gmail.com',password:'123',valid:false},
    {username:"John",birthdate:'02/01/1996',age:'23',email:'john@gmail.com',password:'123',valid:false},
    {username:"Ben",birthdate:'02/01/1996',age:'23',email:'ben@gmail.com',password:'123',valid:false}
    ];
     username = req.body.username;
     password = req.body.password;

    validuser = {}
    for(let ss of user){

      if(username == ss.username && password == ss.password) {
        validuser = {username: ss.username, password: ss.password, birthdate: ss.birthdate, age: ss.age, email: ss.email, valid: true};
        break;
      }
      else {
        validuser = {username: ss.username, password: ss.password, birthdate: ss.birthdate, age: ss.age, email: ss.email, valid: false};
      }

    };

    res.send(validuser);
  
});
}
