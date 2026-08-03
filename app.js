let data = [];
fetch("data.json")
.then(response => response.json())
.then(json => {
data = json;
const universities =
[...new Set(data.map(x => x.name1))]
.sort();
const list =
document.getElementById("universityList");
universities.forEach(name => {
const option = document.createElement("option");
option.value = name;
list.appendChild(option);
});
});
document
.getElementById("university")
.addEventListener("input", showResult);
function showResult() {
 
const university =
document.getElementById("university").value;
 
const result =
data.filter(x =>
x.name1.includes(university)
);
 
const div =
document.getElementById("result");
 
if (result.length === 0) {
div.innerHTML = "";
return;
}
 
let html = `
<table>
<tr>
<th>コード</th>
<th>学校名</th>
<th>学部</th>
<th>学科・コース</th>
</tr>
`;
 
result.forEach(row => {
html += `
<tr>
<td>${row.code}</td>
<td>${row.name1}</td>
<td>${row.name2 || ""}</td>
<td>${row.name3 || ""}</td>
</tr>
`;
});
 
html += "</table>";
 
div.innerHTML = html;
}