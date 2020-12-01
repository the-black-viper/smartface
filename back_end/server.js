const express = require("express");
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'wGjcAGgAjm',
      database : 'finalproj'
    }
  });


// Start App
const app = express();


app.use(bodyParser.json());
app.use(cors());
const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'JohnWick@gmail.com',
            password: 'Somepw',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Xiao',
            email: 'Xiao123@gmail.com',
            password: 'Somepw2',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/signin', (req,res) => {
    let hash = '$2a$10$/AJlM80iUmRpdtJk9xBrne/hoMmN6x7G9TcRWZFWCWJEu.0Ql.DQC'
    bcrypt.compare("45", hash, function(err, res) {
        console.log(res)
    });
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('Success')
        }
    else {
        res.status(400).send('Error logging in')
    }
})

app.post('/register', (req, res) => {
    const {id, email, name, password} = req.body
    db('users').insert({
        email: email,
        name: name,
        joined: new Date()

    })
    .then(console.log)
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(password, salt, function(err, hash) {
    //         console.log(hash)
    //         // Store hash in your password DB.
    //     });
    // });

    res.json(database.users[database.users.length-1]);
})


app.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    // res.json(database.users)
    let found = false;
    database.users.forEach(
        user=>{
            if (user.id === id) {
                found = true;
                return res.json(user)
            }
        }
    )
    if (!found) {
        res.status(404).json('User not found')
    }
})

app.put('/image', (req, res) => {
    const {id} = req.body
    let found = false;
    database.users.forEach(
        user=>{
            if (user.id === id) {
                found = true;
                user.entries++
                return res.json(user.entries)
            }
        }
    )
    if (!found) {
        res.status(404).json('User not found')
    }
})

app.listen(3000, () => {
    console.log("App is running on port 3000")
});

/*
Pseudo code
Define endpoints for front end access
/ (root) --> res = this is working
/signin --> POST res = succses/fail
/register --> POST res = user
/profile/:userid --> GET res = user
/image --> PUT --> user
*/