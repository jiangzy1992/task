<?php
defined('ACC')||exit('Access Denied');

class Model {
    protected $db = null;

    public function __construct() {
        
        $this->db = mysql::getIns();
    }
}


