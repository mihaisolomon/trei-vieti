import HttpService from "./Http.service";
import AppConstants from "../App.constants";

class AuthService {

    ping() {
        return HttpService.get(`${AppConstants.ENDPOINT}/auth/ping`).then(resp => resp.json());
    }

    login({
        email,
        password
    }) {
        return HttpService.post(`${AppConstants.ENDPOINT}/auth/login`, {
            email,
            password
        }).then(resp => resp.json());
    }

    logout() {
        return HttpService.post(`${AppConstants.ENDPOINT}/auth/logout`);
    }

    register({
        username,
        email,
        password
    }) {
        return HttpService.post(`${AppConstants.ENDPOINT}/auth/register`, {
            username,
            email,
            password
        }).then(resp => resp.json());
    }

}


export default new AuthService();
