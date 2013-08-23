<?php

require_once('dbvars.php');

class DatabaseConnection
{

    private $DBH;

    public function __construct()
    {
        $this->DBH = $this->connectToDB();
    }

    private function connectToDB()
    {
        $host = DBVars::$host;
        $dbname = DBVars::$dbname;
        $user = DBVars::$user;
        $pass = DBVars::$pass;
        $DBH = null;
        try {
            #connect to DB
            $DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
        } catch (PDOException $e) {
            # echo $e->getMessage();
        }
        return $DBH;
    }

    public function getAllBlogPosts()
    {
        $STH = $this->DBH->query('SELECT * FROM blog ORDER BY id DESC');
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        $result = array();
        while ($row = $STH->fetch()) {
            array_push($result, $row);
        }
        return $result;
    }

    public function getBlogPostById($id)
    {
        $STH = $this->DBH->query("SELECT * FROM blog WHERE id = $id");
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        $result = array();
        while ($row = $STH->fetch()) {
            array_push($result, $row);
        }
        return $result;
    }

}
