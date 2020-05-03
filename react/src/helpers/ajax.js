
import firebaseInst from "./firebase.js";
const errorMsg = "Oops! Something went wrong";

async function _AJAX (url, body) {

    var token;
    try {
        token = await firebaseInst.getAuth().currentUser.getIdToken(); 
    }
    catch (err) {
        throw err;
    }
   
    const header = {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
    }

    try {
        var result = await fetch(url, {
            headers: header,
            method: 'POST',
            body: JSON.stringify({ user : body})
        });    
    } catch (err) {
        throw errorMsg;
    }

    if (result.status !== 200) {
        throw result.statusText;
    } else {
        const json = await result.json();
        return json;
    }
}


export default async function ajaxContent (url, body, setLoader = () => "") {
    
    setLoader(true);
    var result;
    try {
        result = await _AJAX(url, body)
        result = result.body;
    }
    catch (err) {
        result = err;
    }
    setLoader(false);
    return result;
}

const ajaxUrls = {
    main : "auth",
    getName : "getName"
}

export {ajaxUrls}
