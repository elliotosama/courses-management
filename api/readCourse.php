<?php

include 'config.php';

$json = file_get_contents('php://input');
$data = json_decode($json, true);
$id = $data['id'];



$result = $conn->query("SELECT * FROM courses WHERE id = '$id'");

if($result->num_rows > 0) {
  echo json_encode(['status' => 'success', 'course' => $result->fetch_assoc()]);
} else {
  echo json_encode(['status' => 'course not found']);
}