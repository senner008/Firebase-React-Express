
var serviceAccount;
if (process.env.NODE_ENV === "production") {
    serviceAccount = {
        type: process.env.type,
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key:  process.env.private_key,
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url
      }
}
else {
    serviceAccount = require("../config/private-admin-key.json");
    // console.log(serviceAccount)
}

const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert({
        "private_key": serviceAccount.private_key_id,
        "client_email": serviceAccount.client_email,
      }),
    databaseURL: "https://node-express-auth.firebaseio.com"
});
console.log(process.env.NODE_ENV)
module.exports = admin;
  