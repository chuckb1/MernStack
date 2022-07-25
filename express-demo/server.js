const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
const x = Math.floor((Math.random() * 20) + 8)

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.password = faker.internet.password(x);
        this.email = faker.internet.email(this.firstName, this.lastName);
        this.phoneNumber = faker.phone.number('###-###-####');
        this._id = faker.random.numeric(5);
    }
}
class Company {
    constructor() {
        this._id = faker.random.numeric(6);
        this.name = faker.company.companyName();
        
        this.address = {
            street: faker.address.street(), 
            city: faker.address.city(), 
            state:faker.address.state(), 
            zip:faker.address.zipCode(), 
            country: faker.address.country()
        } 
    }

}



app.get("/api/users/new", (req, res) => {
    res.json(new User)
})
app.get("/api/companies/new" , (req, res) => {
    res.json(new Company)
})
app.get("/api/user/company" , (req, res) => {
res.json({
    user: new User, 
    company: new Company
})
})

app.listen(port, () => console.log(`Running on port ${port}!`));