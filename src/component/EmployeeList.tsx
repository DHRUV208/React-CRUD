import { IEmployee } from './Employee.type';
import './EmployeeList.style.css';

type Props = {
    list: IEmployee[];
}

const EmployeeList = (props: Props)=>{

    const {list} = props;


    return (
        <div>Employee List Page
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  {/* to render a list we use map fn  */}
  {list.map(employee=>{
    // console.log(employee);
    
    return (
        <tr key={employee.id}>
        <td>{`${employee.firstName} ${employee.lastName}`}</td>
        <td>{employee.email}</td>
        <td>
            <div>
                <input type="button" value="View"/>
                <input type="button" value="Edit"/>
                <input type="button" value="Delete"/>

            </div>
        </td>
      </tr>
    );
  })}
 
  </table>
</div>
    );
};
export default EmployeeList;