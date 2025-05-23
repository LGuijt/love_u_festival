<?php

require_once '../core/db_connect.php';


if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

if ( !isset($_GET['lang'])) {
    echo json_encode(['status' => 'error', 'message' => 'language not provided.']);
    exit;
}

$lang = $_GET['lang'];


if ($lang == 'en') {
    $scheduleQuery = "SELECT id, name, podium, day, start_time, end_time, short_en FROM acts";
} else if ($lang == 'nl') {
    $scheduleQuery = "SELECT id, name, podium, day, start_time, end_time, short_nl FROM acts";
}

$stmt = $con->prepare($scheduleQuery);
$stmt->bind_result($id, $name, $podium, $day, $start_time, $end_time, $short);
$stmt->execute();
while ($stmt->fetch()) {
    $data[] = array(
        'id' => $id,
        'name' => $name,
        'podium' => $podium,
        'day' => $day,
        'start_time' => $start_time,
        'end_time' => $end_time,
        'short' => $short
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