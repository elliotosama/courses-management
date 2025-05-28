<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $courseName = $data['course_name'] ?? '';
    $startDate = $data['start_date'] ?? '';
    $endDate = $data['end_date'] ?? '';
    $location = $data['location'] ?? '';
    $sessionTaken = $data['session_taken'] ?? 0;
    $time = $data['time'] ?? '';

    $stmt = $conn->prepare("INSERT INTO `courses` (`name`, `start_date`, `end_date`, `location`, `time`, `session_taken`, `done`) VALUES (?, ?, ?, ?, ?, ?, 0)");
    $stmt->bind_param("sssssi", $courseName, $startDate, $endDate, $location, $time, $sessionTaken);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => $stmt->error
        ]);
    }

    $stmt->close();
} else {
    echo json_encode(['message' => 'This method is not allowed']);
}



/**
 * {
			"course_name": "osama",
			"start_date": "2025-05-27",
			"end_date": "2025-05-28",
			"location": "nasr city",
			"time": "23:00:00",
			"session_taken": "0",
			"done": "0"
    }
 */