import HttpService from "./Http.service";
import AppConstants from "../App.constants";

class AuthService {

    ping() {
        return fetch(`${AppConstants.ENDPOINT}/user/ping`).then(resp => resp.json());
        // return HttpService.get(`${AppConstants.ENDPOINT}/user/ping`).then(resp => resp.json());
    }

    getUser() {
        return HttpService.get(`${AppConstants.ENDPOINT}/users`).then(resp => resp.json());
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
        name,
        email,
        password
    }) {
        return HttpService.post(`${AppConstants.ENDPOINT}/user/register`, {
            name,
            email,
            password
        }).then(resp => resp.json());
    }

}


export default new AuthService();
