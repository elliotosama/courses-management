let courseId = +window.location.search.split('=')[1];
const data = {
  id: courseId
}

const options = {
  method: 'POST',
  body: JSON.stringify(data)
}

let form = document.querySelector('form');
let courseName = document.getElementById('course')
let startDate = document.getElementById('start_date')
let endDate = document.getElementById('end_date')
let loc = document.getElementById('location')
let courseTime = document.getElementById('time')
let firstDay = document.getElementById("day1")
let secondDay = document.getElementById('day2')
let done = document.getElementById('done')
let sessionTaken = document.getElementById('sessionTaken')
fetch('http://localhost/courseProject/api/readCourse.php', options)
.then(response => response.json())
.then(response => {
  if(response['status'] === 'course not found'){
    window.location = 'http://localhost/courseProject/frontend/index.html?done=false'
  } else {
    let course = response['course']
    courseName.value = course['name'];
    startDate.value = course['start_date'];
    endDate.value = course['end_date'];
    loc.value = course['location'];
    courseTime.value = course['time'];
    firstDay.value = course['first_day'];
    secondDay.value = course['second_day'];
    sessionTaken.value = course['session_taken'];
    firstDay.value = course['day1'];
    secondDay.value = course['day2'];
    course['done'] == '1' ? done.checked = true : done.checked = false;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let checked = 0;
      if(done.checked) {
        checked = 1;
      }

      const dataSend = {
        id: courseId,
        course_name: courseName.value,
        start_date: startDate.value,
        end_date: endDate.value,
        location: loc.value,
        time: courseTime.value,
        done: checked,
        session_taken: sessionTaken.value,
        day1: firstDay.value,
        day2: secondDay.value
      }
      const optionsTwo = {
        method: 'POST',
        body: JSON.stringify(dataSend)
      }
      console.log(optionsTwo)
      fetch('http://localhost/courseProject/api/updateCourse.php', optionsTwo)
        .then(one => one.json())
        .then(one => {
          if(one['status'] != 'success') {
            alert('something went wrong')
          } else {
            window.location = 'http://localhost/courseProject/frontend/index.html?done=false';
          }
        })
    })
  } 
})







