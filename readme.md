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

## Deploy to heroku

1. Create a .env file in admin foler and populate with value from secret firebase json key
```
PROJECT_ID=secret
PRIVATE_KEY=secret
CLIENT_EMAIL=secret
```

2. Heroku login
3. heroku authorizations:create
4. Heroku create <my-new-app-name>
5. Go to github settings and create 2 secrets
  - HEROKU_API_KEY with Token from heroku authorizations
  - HEROKU_APP_NAME with the name of your app
6. Go to your heroku app and add the envs
7. Go to the Firebase console and AUthentication -> Sign-in method and add heroku domain
 

