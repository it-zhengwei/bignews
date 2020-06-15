(function (w) {
    var baseURL = 'http://localhost:8080/api/v1';
    var bigapi = {
        login: baseURL + "/admin/user/login",
        info:baseURL+"/admin/user/info",
    }
    w.bigapi = bigapi;
}(window))