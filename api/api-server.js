const serverlocal = require('supertest');
const serverAPI = serverlocal('http://localhost:1234');

function getUser(firstName){
    return serverAPI.get(`/v1/users?name=`+firstName)
        .set('Connection', 'keep-alive')
        .set('Content-type','application/json');
}

function getUserById(userId){
    return serverAPI.get(`/v1/users/`+userId)
        .query({
                id: userId,
        })
        .set('Connection', 'keep-alive')
        .set('Content-type','application/json');
}

function postUser(bodyRequestData) {
    return serverAPI.post('/v1/users')
        .set('Connection', 'keep-alive')
        .set('Content-type','application/json')
        .send(bodyRequestData);
}

function deleteUser(userId) {
    return serverAPI.delete('/v1/users/'+userId)
        .set('Connection', 'keep-alive')
        .set('Content-type','application/json')
        .send(userId);
}

function putUser(bodyRequestData) {
    return serverAPI.put('/v1/users')
        .set('Connection', 'keep-alive')
        .set('Content-type','application/json')
        .send(bodyRequestData);
}

function deleteAllUser() {
    return serverAPI.delete('/v1/users/removeAll')
        .set('Connection', 'keep-alive')
        .set('Content-type','application/json')
        .send();
}

module.exports = {
    getUser,
    getUserById,
    postUser,
    deleteUser,
    putUser,
    deleteAllUser,
}