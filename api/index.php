<?php
include 'config.php';




$withDone = $_GET['done'] ?? 'false';
$query = '';
if($withDone == 'true') {
  $query = "SELECT * FROM courses WHERE done = '1'";
} else {
  $query = "SELECT * FROM courses WHERE done = '0'";
}
$result = $conn->query($query);
$output = ['count' => $result->num_rows, 'courses' => []];
while($row = $result->fetch_assoc()) {
  array_push($output['courses'], $row);
}

header('Content-Type: application/json');
echo json_encode($output);