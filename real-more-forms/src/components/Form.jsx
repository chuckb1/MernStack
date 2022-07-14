import { findAllByTestId } from "@testing-library/react";
import { useState } from "react";


const Form = props => {
    //These are the attributes of the item
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPass};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    }
    const ShowValidation = (input) => {
        if(input.length < 1) {
            return false;
        }
        return true;
    }
    const FirstNameValid = input => {
        if(input.length < 2) {
            return false;
        }
        return true;
    }
    const LastNameValid = input => {
        if(input.length < 2) {
            return false;
        }
        return true;
    }
    const EmailValid = input => {
        if(input.length < 5) {
            return false;
        }
        return true;
    }
    const PasswordValid = input => {
        if(input.length < 8) {
            return false;
        }
        return true;
    }

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
	//         return "Thank you for submitting the form!";
	//     } else {
	//         return "Welcome, please submit the form";
	//     }
    // };

    return(
        <div>
            <form onSubmit = {createUser}>
                {
                    hasBeenSubmitted ?
                    <h2>Thank you for submitting the form!</h2> :
                    <h2>Welcome, please submit the form.</h2>
                }
                {/* <h2>{formMessage()}</h2> */}
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={e => setFirstName(e.target.value)} />
                    
                    {ShowValidation(firstName) ? FirstNameValid(firstName) ? "" : <p>First Name must be longer than 2 characters!</p> : ""}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" onChange={e => setLastName(e.target.value)} />
                    {ShowValidation(lastName) ? LastNameValid(lastName) ? "" : <p>Last Name must be longer than 2 characters!</p> : ""}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                    {ShowValidation(email) ? EmailValid(email) ? "" : <p>Email must be longer than 5 characters!</p> : ""}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                    {ShowValidation(password) ? password===confirmPass ? "" : <p>Passwords must match!</p> : ""}
                    {ShowValidation(password) ? PasswordValid(password) ? "" : <p>Password must be longer than 8 characters!</p> : ""}
                </div>
                <div>
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPass" id="confirmPass" onChange={e => setConfirmPass(e.target.value)} />
                </div>
                
                <input type="submit" value="Create User" />                
            </form>
            
            
            <div>
                <h2>Form Data</h2>
                <h4>First Name: {firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Password: {password}</h4>
                <h4>Confirm Password: {confirmPass}</h4>

            </div>
        </div>
    );
}


export default Form;