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
        $DBC = new DatabaseConnection();
        switch ($request) {
            case "getAllBlogPosts":
                $result = $DBC->getAllBlogPosts();
                echo json_encode($result);
                break;
            case "getBlogPostById":
                $result = $DBC->getBlogPostById($_GET['id']);
                echo json_encode($result);
                break;
            case "getProjectsForOverview":
                $result = $DBC->getAllProjects();
                echo json_encode($result);
                break;
            case "getProjectById":
                $result = $DBC->getProjectById($_GET['id']);
                echo json_encode($result);
                break;
            case "login":
                $username = $_POST['username'];
                $password = $_POST['password'];
                if($username == "admin" && $password == "helloworld"){
                    echo 'true';
                }else{
                    echo 'false';
                }
                break;
            default:
                break;
        }
        $DBC = null;
    }

}

// getAllBlogPosts

