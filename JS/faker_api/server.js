const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

const createUser = ()=>{

    const newUser = {
        id: faker.datatype.uuid(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    }
    return newUser;
};

const createCompany = ()=>{
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
    return newCompany
}
app.use(express.json() );
app.use(express.urlencoded({extended:true}));

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser)
});

app.get("/api/company/new", (req, res) => {
    const newComapny = createCompany();
    res.json(newComapny)
});

app.get("/api/user/company", (req, res) => {
    const comp = createCompany();
    const use = createUser();
    const allThem = {
        user: use,
        company: comp
    };
    res.json(allThem)
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );
