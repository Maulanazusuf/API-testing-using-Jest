const api = require('../api/api-server');

describe ('API Testing JEST Using DELETE method',() => {
    beforeAll(() =>{
        console.log("Started running test case");
    });
    
    afterAll(() =>{
        console.log("Finish running test case");
    });
    //running & assertion
    it ('DELETE All user ', async  () => {
        await reporter
        .description("Delete all user from database")
        let response = await api.deleteAllUser();
        expect(response.status).toBe(200); //status code check
    });
 });