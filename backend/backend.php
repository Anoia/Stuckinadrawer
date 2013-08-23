<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 01 Jan 1996 00:00:00 GMT');
// The JSON standard MIME header.
header('Content-type: application/json');

require_once('DatabaseConnection.php');

new RequestHandler();


class RequestHandler
{

    public function __construct()
    {
        if (!empty($_GET)) {
            # GET Request
            $request = (isset($_GET['request'])) ? $_GET['request'] : "noRequest";
            $this->handleRequest($request);

        } else if (!empty($_POST)) {
            # POST Request
            $request = (isset($_POST['request'])) ? $_POST['request'] : "noRequest";
            $this->handleRequest($request);
        }
    }

    private function handleRequest($request)
    {
        switch ($request) {
            case "getAllBlogPosts":
                $DBC = new DatabaseConnection();
                $result = $DBC->getAllBlogPosts();
                echo json_encode($result);
                break;
            case "getBlogPostById":
                $DBC = new DatabaseConnection();
                $result = $DBC->getBlogPostById($_GET['id']);
                echo json_encode($result);
                break;
            default:
                break;
        }
    }

}

// getAllBlogPosts

