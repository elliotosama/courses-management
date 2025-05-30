let courseId = +window.location.search.split('=')[1];

let deleteButton = document.getElementById('deleteButton');
deleteButton.setAttribute('href', 'http://localhost/courseProject/frontend/delete.html');
let updateButton = document.getElementById('updateButton');
updateButton.setAttribute('href', 'http://localhost/courseProject/frontend/update.html');





const data = {
  id: courseId,
}

const options = {
  method: 'POST',
  body: JSON.stringify(data)
}


async function getData() {
  let response = await fetch('http://localhost/courseProject/api/readCourse.php', options);
  if(!response.ok) {
    throw new Error('something went wrong');
  } else {
    let data = await response.json();
    showData(data)
  }
}


function showData(dataSent) {
  let result = dataSent['course']
  let id = document.getElementById('id')
  let courseName = document.getElementById('courseName')
  let startDate = document.getElementById('startAt')
  let endDate = document.getElementById('endAt')
  let loc = document.getElementById('location')
  let courseTime = document.getElementById('time')
  let firstDay = document.getElementById("day1")
  let secondDay = document.getElementById('day2')
  let sessionTaken = document.getElementById('sessionTaken')
  let finished = document.getElementById('finished')

  id.innerHTML = result['id']
  courseName.innerHTML = result['name']
  startDate.innerHTML = result['start_date']
  endDate.innerHTML = result['end_date']
  loc.innerHTML = result['location']
  firstDay.innerHTML = result['day1']
  secondDay.innerHTML = result['day2']
  courseTime.innerHTML = result['time']
  sessionTaken.innerHTML = result['session_taken']
  if(result['done'] == '1') {
    finished.innerHTML = 'DONE'
  } else {
    finished.innerHTML = 'IN PROGRESS'
  }
}

getData();