<?php

require_once('dbvars.php');

class DatabaseConnection
{

    private $DBH;

    public function __construct()
    {
        $this->DBH = $this->connectToDB();
    }

    public function __destruct()
    {
        $this->DBH = null;
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
        return $STH->fetchAll();
    }

    public function getBlogPostById($id)
    {

        $STH = $this->DBH->prepare('SELECT * FROM blog WHERE id = ?');
        $STH->execute(array($id));
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        return $STH->fetchAll();
    }

    public function getAllProjects()
    {
        $STH = $this->DBH->query('SELECT * FROM projects ORDER BY id DESC');
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        return $STH->fetchAll();
    }

    public function getProjectById($id)
    {
        $STH = $this->DBH->prepare('SELECT * FROM projects WHERE id = ?');
        $STH->execute(array($id));
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        return $STH->fetchAll();
    }

}
