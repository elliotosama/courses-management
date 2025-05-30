let form = document.querySelector('form');

let courseName = document.getElementById('course')
let startDate = document.getElementById('start_date')
let endDate = document.getElementById('end_date')
let loc = document.getElementById('location')
let courseTime = document.getElementById('time')
let firstDay = document.getElementById("day1")
let secondDay = document.getElementById('day2')

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    course_name: courseName.value,
    start_date: startDate.value,
    end_date: endDate.value,
    location: loc.value,
    time: courseTime.value,
    first_day: firstDay.value,
    second_day: secondDay.value
  }


  const options = {
    method: 'POST',
    body: JSON.stringify(data)  
  };
  fetch('http://localhost/courseProject/api/createCourse.php', options)
    .then(response => response.json())
    .then(data => {
      if(data['status'] != 'success') {
        alert('something went wrong')
      } else {
        window.location = 'http://localhost/courseProject/frontend/index.html';
      }
    })
})