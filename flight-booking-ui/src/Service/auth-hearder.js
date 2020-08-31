import axios from 'axios';

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    //return { 'x-access-token': user.Token };
    if (user && user.Token) {

        // for Node.js Express back-end
        return { 'x-access-token': user.Token };
    } else {
        console.log("**************************************************")
        return {};
    }
}