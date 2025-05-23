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

if ($lang == 'en') {
    $parentQuery = "SELECT text.id, type, text_en  FROM text  WHERE text.id = ?";
} else if ($lang == 'nl') {
    $parentQuery = "SELECT text.id, type, text_nl FROM text WHERE text.id = ?";
}
$stmt = $con->prepare($parentQuery);
$stmt->bind_param("i", $id);
$stmt->bind_result($id, $type, $text);
$stmt->execute();
while ($stmt->fetch()) {
    $data = array(
        'id' => $id,
        'type' => $type,
        'text' => $text,
    );
}

if (!isset($data)) {
    echo json_encode(['status' => 'error', 'message' => 'Parent not found.']);
    exit;
}

$response = [
    'data' => $data,
    'status' => 'success'
];

echo json_encode($response);
$stmt->close();
