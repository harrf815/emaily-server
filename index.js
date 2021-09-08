const express = require('express'); //! npm i --save express
const mongoose = require('mongoose') //! npm i --save mongoose
const cookieSession = require('cookie-session') //! npm i --save cookie-session
const passport = require('passport') //! npm i --save passport passport-google-oauth20 (for using google Oauth)
const keys = require('./config/keys')
require('./models/User') //! if error appeared schema hasnt been registered make sure models are above passport
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //! 30 days 
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);