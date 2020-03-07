if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: './.env' })
}
const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert({
        project_id: process.env.PROJECT_ID,
        private_key:  process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.CLIENT_EMAIL,
      }),
    databaseURL: "https://node-express-auth.firebaseio.com"
});

module.exports = admin;
  