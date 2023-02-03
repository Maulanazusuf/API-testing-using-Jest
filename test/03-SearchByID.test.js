const api = require('../api/api-server');

describe ('API Testing JEST Using GET method',() => {
    beforeAll(() =>{
        console.log("Started running test case");
    });
    
    afterAll(() =>{
        console.log("Finish running test case");
    });
    
    it ('GET user by name', async  () => {
        await reporter
        .description("GET user by name")
        let response = await api.getUser(`Stephen`);
        console.log(response.body);
        //assertion
        expect(response.status).toBe(200); //status code check
        expect(response.body.status).toBe('success'); //Check status
        expect(response.body.data[0].firstName).toBe('Stephen'); // Check firstname
        expect(response.body.data[0].lastName).toBe('Chao'); // Check lastName
        expect(response.body.data[0].age).toBe(52); // Check age
        
    });
});