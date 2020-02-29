## Minimal demonstration of :
- Firebase front- and backend 
- with React and React-router

### Setup :

#### add firebase config to react/src/config
```js
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
module.exports = firebaseConfig;
```

#### add firebase private key to admin/config/private-admin-key.json
```js
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```