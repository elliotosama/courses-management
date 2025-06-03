let container = document.querySelector('.container');
let courseId = +window.location.search.split('=')[1];

const data = {
  id: courseId
}

const options = {
  method: 'POST',
  body: JSON.stringify(data)
}

if(confirm('are you sure?')) {
  fetch('http://localhost/courseProject/api/deleteCourse.php', options)
  .then(response => response.json())
  .then(response => {
    if(response['status'] === 'success') {
      let alert = document.createElement('div');
      alert.innerHTML = 'the course has been deleted';
      alert.className = 'alert alert-success';
      container.appendChild(alert)
    }
  })
} else {
  window.location = 'http://localhost/courseProject/frontend/index.html?done=false'
}