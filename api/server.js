const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const sessions = require("express-session")
const passport = require("passport")
const localStrategy = require("passport-local").Strategy

const routes = require("./routes/index")
const db = require("./db");
const User = require("./models/User")
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(sessions({secret : "kokoloko"}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(
  {
  usernameField : "email", 
  passwordField : "password"
  }, 
  function(email, password, done){
    User.findOne({where : {email}})
    .then(user =>{
      if (!user){
        done(null, false)
      }

      user.hash(password, user.salt).then(hash =>{
        if (hash !== user.password){
          return done(null, false)
        }
        return done(null, user)
      })
    })
    .catch(done)
}))

passport.serializeUser(function(user, done){
  done(null, user.id)
})
passport.deserializeUser(function(id, done){
  User.findByPk(id).then(user =>{
    done(null, user)
  })
  .catch(done)
})


app.use("/api", routes);

// db.sync({force : true }).then(() => {
db.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Escuchando en el puerto ", PORT);
  });
});




