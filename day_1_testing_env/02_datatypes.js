/* So basically we have primitive and non primitive
datatype : 

Primitive : 
1. number
2. boolean
3. string
4. undefined
5. null => standalone value
6. symbol => unique

Non-primitive

1. object 

*/

let employeeName = "Yashas"; // String
let employeeAge = 22; // number
let isEmployee = true; //boolean
let employeeDept = null; //Standalone value Null means Empty
let employeeSalary = undefined;

console.table([employeeName,employeeAge,isEmployee,employeeSalary,employeeDept])