<?php
include 'config.php';
$json = file_get_contents('php://input');
$data = json_decode($json, true);
$id = $data['id'];
$result = $conn->query("DELETE FROM courses WHERE id = '$id'");

echo json_encode(['status' => 'success']);