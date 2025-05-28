<?php
include 'config.php';



$result = $conn->query('SELECT * FROM courses');
$output = ['count' => $result->num_rows, 'courses' => []];
while($row = $result->fetch_assoc()) {
  array_push($output['courses'], $row);
}

header('Content-Type: application/json');
echo json_encode($output);