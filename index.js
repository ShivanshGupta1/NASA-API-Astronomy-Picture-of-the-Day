const express = require('express');
const request = require('request');
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null })

});
app.listen(3000, () => {
    console.log("server ")
})


app.post('/', (req, res) => {
    let moviename = req.body.city_name
    let url = `https://api.nasa.gov/planetary/apod?api_key=HvaPvVL9RIrdJrusF1Sh58B0IazeKWC5Ozk4fdtN&date=${moviename}`
    request(url, (error, response, body)=> {
        console.log(response)
        if (error) {
            res.render('index', { weather: null, error: 'Error Please try again' })
        }
        else {
            weather = JSON.parse(body);
            res.render('index', { weather: weather, error: null })
        }
    });

})
