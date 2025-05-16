<?php
include_once __DIR__ . '/db_credentials.php';
?>

<?php
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

// database connection
$con = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);

if ($con->connect_errno) {
    echo "Failed to connect to MySQL: " . $con->connect_error;
    exit();
}

function testInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}