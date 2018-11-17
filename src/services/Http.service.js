class Http {
    get(url, options = {}) {
        return httpGeneric(url, Object.assign({}, options, {
            method: "GET"
        }));
    }

    post(url, body = {}, options = {}) {
        return httpGeneric(url, Object.assign({}, options, {
            method: "POST",
            body: JSON.stringify(body)
        }));
    }

    put(url, body = {}, options = {}) {
        return httpGeneric(url, Object.assign({}, options, {
            method: "PUT",
            body: JSON.stringify(body)
        }));
    }

    delete(url, body = {}, options = {}) {
        return httpGeneric(url, Object.assign({}, options, {
            method: "DELETE",
            body: JSON.stringify(body)
        }));
    }
}

function httpGeneric(url, options = {}) {
    return fetch(url, Object.assign({}, {
            headers: new Headers({
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("authToken")}`
            }),
            credentials: "include",
        }, options)).then(resp => {
            if (resp.ok) {
                return resp;
            } else {
                return resp.json().then(jsonResp => {
                    throw jsonResp;
                });
            }
        })
        .catch(err => {
            if (!err.status || err.status === 500) {
                alert("Server error");
            }
            throw err;
        })
}

export default new Http();