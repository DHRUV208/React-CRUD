import { useState } from "react";
import AddEmployee from "./AddEmployee";
import { dummyEmployeeList, IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";

// functional component
const Home = () =>{

    const [employeeList, setEmployeeeList] = useState(dummyEmployeeList as IEmployee[]);
    const[shownPage,setShownPage] = useState(PageEnum.list);
    const onAddEmployeeClickHandler = ()=>{
        setShownPage(PageEnum.add);
    }
    const showListPage = () =>{
        setShownPage(PageEnum.list);
    }
    const addEmployeeHandler = (data: IEmployee)=>{
        setEmployeeeList([...employeeList,data]);
    }
    return (
    <>
    <article className="article-header">
        <header>
            <h1>React: Simple CRUD Application</h1>
        </header>
    </article>

    <section className="section-content">
        {shownPage === PageEnum.list && (
            <>
            <input type="button" value="Add Employee" onClick={onAddEmployeeClickHandler} />
            <EmployeeList list={employeeList}/>  
            </>
        )}
        {shownPage ===PageEnum.add && <AddEmployee onBackBtnClickHandler={showListPage} onSubmitClickHandler={addEmployeeHandler}/>}
        {/* <div>Content part</div> */}
    </section>
    </>
    );
};
export default Home;