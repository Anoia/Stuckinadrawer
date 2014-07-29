<?php
require_once('dbvars.php');


class DatabaseConnection
{

    private $DBH;

    public function __construct(){
        $this->DBH = $this->connectToDB();
    }

    public function __destruct(){
        $this->DBH = null;
    }

    private function connectToDB(){
        $host = DBVars::$host;
        $dbname = DBVars::$dbname;
        $user = DBVars::$user;
        $pass = DBVars::$pass;
        $DBH = null;
        try {
            #connect to DB
            $DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        return $DBH;
    }

    public function getAllBlogPosts(){
        $STH = $this->DBH->query('SELECT * FROM blog ORDER BY id DESC');
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        return $STH->fetchAll();
    }

    public function getBlogPostById($id){

        $STH = $this->DBH->prepare('SELECT * FROM blog WHERE id = ?');
        $STH->execute(array($id));
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        return $STH->fetchAll();
    }

    public function getAllProjects(){
        $STH = $this->DBH->query('SELECT * FROM projects ORDER BY id DESC');
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        return $STH->fetchAll();
    }

    public function getProjectById($id){
        $STH = $this->DBH->prepare('SELECT * FROM projects WHERE id = ?');
        $STH->execute(array($id));
        $STH->setFetchMode(PDO::FETCH_ASSOC);
        return $STH->fetchAll();
    }

    public function addNewProject($data){
        $STH = $this->DBH->prepare('INSERT INTO projects (title, lang, written, download, online, source, thumbnail, image, description, content) VALUES (?,?,?,?,?,?,?,?,?,?)');
        $STH->execute($data);
    }

    public function updateProject($data){
        $STH = $this->DBH->prepare('UPDATE projects SET title=?, lang=?, written=?, download=?, online=?, source=?, thumbnail=?, image=?, description=?, content=?  WHERE id=?');
        $STH->execute($data);
    }

    public function deleteProject($id){
        $STH = $this->DBH->prepare('DELETE FROM projects WHERE id=?');
        $STH->execute(array($id));
    }

}
