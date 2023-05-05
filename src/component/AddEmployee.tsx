import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
    onBackBtnClickHandler : () => void;
    onSubmitClickHandler : (data: IEmployee) => void;
}

const AddEmployee = (props: Props) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const {onBackBtnClickHandler, onSubmitClickHandler} = props;
    const onFirstNameChangeHandler = (e: any)=>{
        // console.log(e.target.value);
        setFirstName(e.target.value);
        
    }
    const onLastNameChangeHandler = (e: any)=>{
        setLastName(e.target.value);
    }
    const onEmailChangeHandler = (e: any)=>{
        setEmail(e.target.value);
    }
    const onSubmitBtnClickHandler = (e: any)=>{
        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email,
        }
        onSubmitClickHandler(data);
        onBackBtnClickHandler();
    }
    return (
        <form onSubmit={onSubmitBtnClickHandler}>
            <div className="form-container">
                <div>
                <label >First Name : </label>
                <input type="text" value={firstName} onChange={onFirstNameChangeHandler}/>
            </div>
            <div>
                <label >Last Name : </label>
                <input type="text" value={lastName} onChange={onLastNameChangeHandler}/>
            </div>
            <div>
                <label >Email : </label>
                <input type="text" value={email} onChange={onEmailChangeHandler}/>
            </div>
            <div>
                <input type="button" value="Back" onClick={onBackBtnClickHandler}/>
                <input type="submit" value="Add Employee" />

            </div>
            </div>
        </form>
    );
};

export default AddEmployee;
