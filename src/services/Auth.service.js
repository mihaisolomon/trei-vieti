import HttpService from "./Http.service";
import AppConstants from "../App.constants";

class AuthService {

    ping() {
        return Promise.resolve(null);
        // return HttpService.get(`${AppConstants.ENDPOINT}/user/ping`).then(resp => resp.json());
    }

    login({
        email,
        password
    }) {
        return HttpService.post(`${AppConstants.ENDPOINT}/user/login`, {
            email,
            password
        }).then(resp => resp.json());
    }

    logout() {
        return HttpService.post(`${AppConstants.ENDPOINT}/user/logout`);
    }

    register({
        username,
        email,
        password
    }) {
        return HttpService.post(`${AppConstants.ENDPOINT}/user/register`, {
            username,
            email,
            password
        }).then(resp => resp.json());
    }

}


export default new AuthService();
