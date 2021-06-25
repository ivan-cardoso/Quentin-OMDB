const User = require("./User")
const Favourites = require("./Favourites")

User.hasMany(Favourites)

module.exports = {User, Favourites}