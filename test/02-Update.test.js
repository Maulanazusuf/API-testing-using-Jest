const api = require('../api/api-server');
const User1 = require('../data/create-user.json'); // User Stephen Chao
const updateUser = require('../data/patch-user.json');

describe ('API Testing JEST Using PUT Method',() =>{
    beforeAll( async () =>{
        console.log("Started running test case");
        let response = await api.postUser(User1);
        expect(response.status).toBe(200);
        targetID = response.body.id;
    });
    
    afterAll(() =>{
        console.log("Finish running test case");
    });
    it('Update occupation and nationality data', async() => {
        await reporter
        .description("Update user data")
        //update ID and other datas
        updateUser.id=targetID
        let occupationUpdate = "Pancak Silat"
        let nationalityUpdate = "Japanese"
        updateUser.occupation = occupationUpdate
        updateUser.nationality = nationalityUpdate
        let response = await api.putUser(updateUser);
        //assertion
        expect(response.status).toBe(200); //status code check
        expect(response.body.id).toBe(targetID); //ID check
        console.log(response.body);
        expect(response.body.firstName).toBe("Stephen"); //firstName check
        expect(response.body.nationality).toBe("Japanese"); //nationality update check
        expect(response.body.occupation).toBe("Pancak Silat"); //occupation update check
        
});
});