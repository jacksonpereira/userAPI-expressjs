const app = require('express')();

app.get('/users', (req, res) => res.send('Hello Users API'));

app.post('/createUser', (req, res) => {
    if(req.headers.authorization === "jackson"){
        res.status(200).json({token: '###666###'});
    }else{
        res.status(500).json({message: "User not founded!"});
    }
});

app.listen(3001, () => console.log(`Users API listening on port 3001!`));