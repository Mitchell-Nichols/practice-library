const path = require('path')
const express = require('express')
const hbs = require('hbs') //for partials

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { request } = require('http')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mitchell Nichols'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Mitchell Nichols'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Mitchell Nichols'
    })

})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return res.send({error})
            }
            
            res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        name:'Mitchell Nichols',
        title: '404 Page',
        error: 'Help article not found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        name:'Mitchell Nichols',
        title: '404 Page',
        error: 'Page Not Found!'
    })
})


// app.get('', (req, res) => {
//     res.send('Hello Express!')
// })

// app.get('/help', (req, res) => {
//     res.send('Help page!')
// })

// app.get('/about', (req, res) => {
//     res.send('About page!')
// })

//app.com
//app.com/help
//app.com/about

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})