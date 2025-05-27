<?php

require_once '../core/db_connect.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

if (!isset($_GET['id']) || !isset($_GET['lang'])) {
    echo json_encode(['status' => 'error', 'message' => 'ID not provided.']);
    exit;
}

$id = $_GET['id'];
$lang = $_GET['lang'];

if ($lang == 'nl') {
    $parentQuery = "SELECT a.id, a.name, a.podium, a.day, a.start_time, a.end_time, e.description_nl, e.img, e.video FROM acts a JOIN acts_extra e ON a.extra_info = e.id WHERE a.id = ?";
} else if ($lang == 'en') {
    $parentQuery = "SELECT a.id, a.name, a.podium, a.day, a.start_time, a.end_time, e.description_en, e.img, e.video FROM acts a JOIN acts_extra e ON a.extra_info = e.id WHERE a.id = ?";
} 

$stmt = $con->prepare($parentQuery);
$stmt->bind_param("i", $id);
$stmt->bind_result($id, $name, $podium, $day, $start_time, $end_time, $description, $img, $video);
$stmt->execute();

while ($stmt->fetch()) {
    $data = array(
        'id' => $id,
        'name' => $name,
        'podium' => $podium,
        'day' => $day,
        'start_time' => $start_time,
        'end_time' => $end_time,
        'description' => $description,
        'img' => $img,
        'video' => $video
    );
}

$response = [
    'data' => $data,
    'status' => 'success'
];

echo json_encode($response);
$stmt->close();