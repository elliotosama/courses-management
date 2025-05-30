// fetch('://localhost/courseProject/api/index.php')

async function fetchData() {
  let response = await fetch('http://localhost/courseProject/api/index.php');
  if(response.ok) {
    let data = await response.json();
    showData(data);
  } else {
    throw new Error('can not fetch the data');
  }
}

let table = document.querySelector("tbody")
function showData(result) {
  let courses = result['courses'];
  courses.forEach(element => {
    let tr = document.createElement('tr');
    let id = document.createElement('td')
    let courseName = document.createElement('td')
    let startDate = document.createElement('td')
    let endDate = document.createElement('td')
    let location = document.createElement('td')
    let sessionTaken = document.createElement('td')
    let time = document.createElement('td')
    let actions = document.createElement('td')
    let updateButton = document.createElement('a');
    let showButton = document.createElement('a');
    let deleteButton = document.createElement('a');
    let postId = element['id'];
    showButton.setAttribute('href', `http://localhost/courseProject/show.html?id=${postId}`);
    updateButton.className = 'btn btn-primary';
    updateButton.setAttribute('href', `http://localhost/courseProject/update.html?id=${postId}`);
    updateButton.textContent = 'update';
    deleteButton.setAttribute('href', `http://localhost/courseProject/delete.html?id=${postId}`);
    showButton.className = 'btn btn-success mx-1';
    showButton.textContent = 'show';
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'delete'
    courseName.textContent = element['name']
    id.textContent = element['id'];
    startDate.textContent = element['start_date'];
    endDate.textContent = element['end_date'];
    location.textContent = element['location'];
    sessionTaken.textContent = element['session_taken'];
    time.textContent = element['time'];
    actions.appendChild(updateButton)
    actions.appendChild(showButton)
    actions.appendChild(deleteButton)
    tr.append(id, courseName, startDate, endDate, location, sessionTaken, time, actions);
    table.appendChild(tr)
  });
}


fetchData();