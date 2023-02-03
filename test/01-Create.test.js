const api = require("../api/api-server");
const User1 = require("../data/create-user.json");
const User2 = require("../data/create-user2.json");
const User3 = require("../data/create-user3.json");

describe("API Testing JEST Using POST method", () => {
  beforeAll(() => {
    console.log("Started running test case");
  });

  afterAll(() => {
    console.log("Finish running test case");
  });

  it("Create User Stephen Chao", async () => {
    await reporter
    .description("Create User Stephen Chao ")
    let response = await api.postUser(User1);
    console.log(response.body);
    //assertion
    expect(response.status).toBe(200); //status code check
    expect(response.body.firstName).toBe("Stephen"); // firstName check
    expect(response.body.lastName).toBe("Chao"); // lastName check
  });
  it("Create User Jet Lee", async () => {
    await reporter
    .description("Create User Jet Lee ")
    let response = await api.postUser(User2);
    console.log(response.body);
    //assertion
    expect(response.status).toBe(200); //status code check
    expect(response.body.firstName).toBe("Jet"); // firstName check
    expect(response.body.lastName).toBe("Lee"); // lastName check
  });
  it("Create User Jackie Chan", async () => {
    await reporter
    .description("Create User Jeckie Chan")
    let response = await api.postUser(User3);
    console.log(response.body);
    //assertion
    expect(response.status).toBe(200); //status code check
    expect(response.body.firstName).toBe("Jackie"); // firstName check
    expect(response.body.lastName).toBe("Chan"); // lastName check
  });
});