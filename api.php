<?php
// Mock API for IT Help Desk
header('Content-Type: application/json');

// In a real application, you would connect to DB here
// require_once 'db_config.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'get_tickets':
        // Mock data matching the schema
        $tickets = [
            [
                "id" => 7200,
                "title" => "Support support lmow work port",
                "requester" => "Marica Bal&ston",
                "status" => "Resolved",
                "priority" => "High",
                "updated_at" => "2025-12-22 10:30:00"
            ],
            [
                "id" => 7201,
                "title" => "HD Banner support ticket",
                "requester" => "John Smith",
                "status" => "Pending",
                "priority" => "Medium",
                "updated_at" => "2025-12-22 11:15:00"
            ],
            [
                "id" => 7203,
                "title" => "Rannqviout system drama management",
                "requester" => "John Smith",
                "status" => "Urgent",
                "priority" => "High",
                "updated_at" => "2025-12-22 01:45:00"
            ]
        ];
        echo json_encode($tickets);
        break;

    case 'get_stats':
        echo json_encode([
            "total" => 1284,
            "open" => 42,
            "resolved" => 1242,
            "avg_time" => "2h 15m"
        ]);
        break;

    default:
        echo json_encode(["error" => "Invalid action"]);
        break;
}
?>