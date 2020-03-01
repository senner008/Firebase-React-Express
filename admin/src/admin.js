

if (process.env.NODE_ENV === "production") {

}
else {
    var serviceAccount = require("../config/private-admin-key.json");
}

const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://node-express-auth.firebaseio.com"
});
console.log(process.env.NODE_ENV)
module.exports = admin;
  