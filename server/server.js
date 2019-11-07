const _ = require('lodash');
const jsonServer = require('json-server');
const server = jsonServer.create();
const serverPort = 3000;
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const uuid = require('uuid/v4');
const authenticationUrl = '/auth/token';
const userEndpoints = [
    {uri: /^\/tasks/, method: 'GET'},
    {uri: /^\/tasks/, method: 'POST'},
    {uri: /^\/tasks\/\d+/, method: 'PUT'},
    {uri: /^\/users/, method: 'GET'},
    {uri: /^\/users\/\d+/, method: 'PUT'}
];

// Security
const authenticatedUsers = [];

function db() {
    return router.db.getState();
}

function validateCredentials(credentials) {
    return db().users.find(user => credentials.login === user.login && credentials.password === user.password);
}

function authenticate(request, response) {
    const authentication = validateCredentials(request.body);
    if (authentication) {
        const user = Object.assign({}, authentication);
        user.token = uuid();
        authenticatedUsers.push(user);
        response.send({token: user.token});
    } else {
        response.sendStatus(401);
    }
}

function isAuthenticated(request, response, next) {
    const token = request.headers.authorization;
    const authenticatedUser = authenticatedUsers.find(user => user.token === token);
    if (authenticatedUser) {
        response.locals.authenticatedUser = authenticatedUser;
        next();
    } else {
        response.sendStatus(401);
    }
}

function isAuthorized(request, response, next) {
    const isSecuredUri = userEndpoints.find(endpoint => endpoint.uri.test(request.url) && endpoint.method === request.method) === undefined;
    const authenticatedUser = response.locals.authenticatedUser;
    if (authenticatedUser.role !== 'admin' && isSecuredUri) {
        response.sendStatus(403);
    } else {
        next();
    }
}

// Initialization
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post(authenticationUrl, authenticate);
server.use(isAuthenticated);
server.use(isAuthorized);
server.use(router);
server.listen(serverPort, () => console.log(`JSON Server is running on port ${serverPort}`));