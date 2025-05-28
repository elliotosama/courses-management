<?php

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $id = $data['id'];
    $courseName = $data['course_name'];
    $startDate = $data['start_date'];
    $endDate = $data['end_date'];
    $location = $data['location'];
    $sessionTaken = $data['session_taken'];
    $time = $data['time'];
    $done = $data['done'];

    $stmt = $conn->query("UPDATE courses SET name = '$courseName', start_date = '$startDate', end_date = '$endDate', location = '$location', time = '$time', session_taken = '$sessionTaken', done = '$done' WHERE id = '$id'");

    if ($stmt) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode([
            'status' => 'error'
        ]);
    }
} else {
    echo json_encode(['message' => 'This method is not allowed']);
}



/**
 * {
 *    "id": "id",
			"course_name": "osama",
			"start_date": "2025-05-27",
			"end_date": "2025-05-28",
			"location": "nasr city",
			"time": "23:00:00",
			"session_taken": "0",
			"done": "0"
    }
 */