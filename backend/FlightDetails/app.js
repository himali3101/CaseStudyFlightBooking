const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOption = {
    swaggerDefinition: {
        info: {
            title: "Flight Details API",
            description: "This API contains Flight related methods",
            contact: {
                name: "Himali Gunjal"
            },
            servers: ["http://localhost:3001"]
        }
    },
    apis: ['./api/Routes/flightDetails.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOption)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const flightDetailsRoutes = require('./api/Routes/flightDetails')

mongoose.connect("mongodb+srv://himali:himali@cluster1.eeyiw.mongodb.net/FlightDB?retryWrites=true&w=majority", { useNewUrlParser: true })

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
        return res.status(200).json({})
    }
    next();
})

app.use('/flight', flightDetailsRoutes);
app.use((req, res, next) => {
    console.log("app")
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app