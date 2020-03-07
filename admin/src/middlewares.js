const admin = require("./admin.js")

const makeAdmin = async uid => await admin.auth().setCustomUserClaims(uid, {admin: true});

const getAuthToken = (req, res, next) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      req.authToken = req.headers.authorization.split(' ')[1];
    } else {
      req.authToken = null;
    }
    next();
  };

const checkIfAdmin = (req, res, next) => {
    getAuthToken(req, res, async () => {
       try {
         const { authToken } = req;
    
         const userInfo = await admin
           .auth()
           .verifyIdToken(authToken);

        // make myself as admin 
        // - remember to only allow One account per email address in firebase console
        if (!userInfo.admin && userInfo.email === 'nielshtg@gmail.com') {
          await makeAdmin(userInfo.uid)
        }
        
        if (userInfo.admin === true) {
          req.authId = userInfo.uid;
          return next();
        }
  
         throw new Error('unauthorized')
       } catch (e) {
         return res
           .status(401)
           .send({ error: 'You are not authorized to make this request' });
       }
     });
   };

   module.exports = checkIfAdmin;