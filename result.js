const students = [
{
name:"Missy",
regNo:"CIS/2025/001",
password:"missy1",
passport:"missy.jpg",
results:[
{subject:"Mathematics",firstTest:20,secondTest:18,exam:55,remark:"Excellent"},
{subject:"English",firstTest:19,secondTest:16,exam:50,remark:"Very Good"},
{subject:"Biology",firstTest:15,secondTest:14,exam:60,remark:"Good"},
{subject:"Physics",firstTest:17,secondTest:15,exam:55,remark:"Good"},
{subject:"Chemistry",firstTest:18,secondTest:17,exam:56,remark:"Excellent"},
{subject:"Geography",firstTest:16,secondTest:14,exam:52,remark:"Good"},
{subject:"CRS",firstTest:18,secondTest:16,exam:58,remark:"Excellent"},
{subject:"Civic Education",firstTest:20,secondTest:18,exam:59,remark:"Excellent"},
{subject:"Marketing",firstTest:15,secondTest:14,exam:50,remark:"Good"},
{subject:"Government",firstTest:14,secondTest:13,exam:48,remark:"Fair"},
{subject:"Literature",firstTest:16,secondTest:15,exam:54,remark:"Very Good"}
]
},
{
name:"Mary",
regNo:"CIS/2025/002",
password:"mary1",
passport:"mary.jpeg",
results:[
{subject:"Mathematics",firstTest:18,secondTest:20,exam:58,remark:"Excellent"},
{subject:"English",firstTest:15,secondTest:14,exam:52,remark:"Good"},
{subject:"Biology",firstTest:16,secondTest:15,exam:50,remark:"Good"},
{subject:"Physics",firstTest:17,secondTest:16,exam:55,remark:"Good"},
{subject:"Chemistry",firstTest:18,secondTest:17,exam:57,remark:"Excellent"},
{subject:"Geography",firstTest:15,secondTest:14,exam:51,remark:"Good"},
{subject:"CRS",firstTest:18,secondTest:17,exam:56,remark:"Excellent"},
{subject:"Civic Education",firstTest:19,secondTest:18,exam:58,remark:"Excellent"},
{subject:"Marketing",firstTest:14,secondTest:15,exam:49,remark:"Good"},
{subject:"Government",firstTest:13,secondTest:14,exam:48,remark:"Fair"},
{subject:"Literature",firstTest:15,secondTest:16,exam:53,remark:"Very Good"}
]
}
];

function checkResult(){

const regNo=document.getElementById("regNo").value.trim().toUpperCase();
const password=document.getElementById("password").value;

const errorBox = document.getElementById("error-message");
errorBox.textContent = ""; // FIX: clear previous errors

const student=students.find(s=>s.regNo.toUpperCase()===regNo && s.password===password);

if(!student){
errorBox.textContent="Invalid Login";
return;
}

// FIX: ensure clean state
document.getElementById("result-table").innerHTML="";

document.getElementById("login-section").style.display="none";
document.getElementById("result-section").style.display="block";

document.getElementById("passport").src=student.passport;
document.getElementById("student-name").textContent=student.name;
document.getElementById("student-regno").textContent=student.regNo;

const table=document.getElementById("result-table");

let total=0;

// FIX: safety check
if(student.results && student.results.length > 0){

student.results.forEach(r=>{
const sum=r.firstTest+r.secondTest+r.exam;
total+=sum;

table.innerHTML+=`
<tr>
<td>${r.subject}</td>
<td>${r.firstTest}</td>
<td>${r.secondTest}</td>
<td>${r.exam}</td>
<td>${sum}</td>
<td>${(sum/3).toFixed(1)}</td>
<td>${r.remark}</td>
</tr>`;
});

}

// FIX: avoid divide by zero
let avg = student.results.length ? (total/student.results.length).toFixed(1) : 0;

document.getElementById("grand-total").textContent="Grand Total: "+total;
document.getElementById("average-score").textContent="Average: "+avg;
}

function logout(){

document.getElementById("login-section").style.display="block";
document.getElementById("result-section").style.display="none";

// FIX: reset fields properly
document.getElementById("regNo").value="";
document.getElementById("password").value="";
document.getElementById("error-message").textContent="";
}

function printResult(){
window.print();
}