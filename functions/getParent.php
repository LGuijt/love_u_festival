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
    $parentQuery = "SELECT text.id, type, text_en, GROUP_CONCAT(child_id) AS child_ids FROM text JOIN text_combos ON text.id = text_combos.container_id wHERE text.id = ? GROUP BY text.id";
} else if ($lang == 'nl') {
    $parentQuery = "SELECT text.id, type, text_nl, GROUP_CONCAT(child_id) AS child_ids FROM text JOIN text_combos ON text.id = text_combos.container_id wHERE text.id = ? GROUP BY text.id";
}
$stmt = $con->prepare($parentQuery);
$stmt->bind_param("i", $id);
$stmt->bind_result($id, $type, $text, $child_ids);
$stmt->execute();
while ($stmt->fetch()) {
    if (!isset($child_ids) || $child_ids == '' || $child_ids == 'NULL') {
        echo json_encode(['status' => 'error', 'message' => 'No child IDs found.']);
        $child_ids = '';
    } else {
        $child_ids = explode(',', $child_ids);
    }

    $parent = array(
        'id' => $id,
        'type' => $type,
        'text' => $text,
        'child_ids' => $child_ids,
    );
}

if (!isset($parent)) {
    echo json_encode(['status' => 'error', 'message' => 'Parent not found.']);
    exit;
}

$response = [
    'parent' => $parent,
    'status' => 'success'
];

echo json_encode($response);
$stmt->close();
