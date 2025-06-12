<?php

require_once '../core/db_connect.php';


if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

if ( !isset($_GET['day']) || !isset($_GET['time'])) {
    echo json_encode(['status' => 'error', 'message' => 'day or time not provided.']);
    exit;
}

$day = $_GET['day'];
$time = $_GET['time'];


$actQuery = "SELECT id, name, podium, day, start_time, end_time FROM acts WHERE day = ? AND start_time <= ? AND end_time >= ? ORDER BY start_time ASC";
$stmt = $con->prepare($actQuery);
$stmt->bind_param('sss', $day, $time, $time);
$stmt->bind_result($id, $name, $podium, $day, $start_time, $end_time);

$stmt->execute();
while ($stmt->fetch()) {
    $data[] = array(
        'id' => $id,
        'name' => $name,
        'podium' => $podium,
        'day' => $day,
        'start_time' => $start_time,
        'end_time' => $end_time
    );
}

if (!isset($data)) {
    echo json_encode(['status' => 'error', 'message' => 'No schedule found.']);
    exit;
}

$response = [
    'data' => $data,
    'status' => 'success'
];

echo json_encode($response);
$stmt->close();