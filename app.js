function onFormSubmit() {
    const formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}

function readFormData() {
    const formData = {};
    formData['fullName'] = document.getElementById('fullName').value;
    formData['empCode'] = document.getElementById('empCode').value;
    formData['salary'] = document.getElementById('salary').value;
    formData['city'] = document.getElementById('city').value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById('employeelist').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                       <a>Delete</a>`;
}

function resetForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('empCode').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('city').value = '';
}
