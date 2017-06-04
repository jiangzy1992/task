<?php
defined('ACC')||exit('Access Denied');

// 封装mysql操作类,包括连接功能,及查询功能.

class mysql {
    protected static $ins = null;

    protected $host;  // 主机名
    protected $user;  // 用户名
    protected $passwd; // 密码
    protected $db;      // 数据库名
    protected $port;    // 端口
    protected $conn = null;

    // 在内部操作,获得一个对象
    public static function getIns() {
        if(self::$ins === null) {
            self::$ins = new self();
        }

        $conf = conf::getIns();

        self::$ins->host = $conf->host;
        self::$ins->user = $conf->user;
        self::$ins->passwd = $conf->pwd;
        self::$ins->db = $conf->db;
        self::$ins->port = $conf->port;

        self::$ins->connect();
        self::$ins->select_db();
        self::$ins->setChar();

        return self::$ins;
    }

    // 不让外部做new操作,
    protected function __construct() {
        
    }




        // 连接数据库
    public function connect() {
        $this->conn = mysql_connect($this->host,$this->user,$this->passwd,$this->port);
    }

    // 发送sql查询
    public function query($sql) {
        $rs = mysql_query($sql,$this->conn);
        return $rs;
    }

    // 封装一个getAll方法
    // 参数:$sql
    // 返回: array,false
    public function getAll($sql) {
        $rs = $this->query($sql);
        if(!$rs) {
            return false;
        }

        $list = array();
        while($row = mysql_fetch_assoc($rs)) {
            $list[] = $row;
        }
        
        return $list;
       
    }

    // 封装一个getRow方法
    // 参数:$sql
    // 返回: array,false
    public function getRow($sql) {
        $rs = $this->query($sql);
        if(!$rs) {
            return false;
        }

        return mysql_fetch_assoc($rs);
    }

    // 封装一个getOne方法,
    // 参数: $sql
    // 返回: int,str(单一的值)
    public function getOne($sql) {
        $rs = $this->query($sql);
        if(!$rs) {
            return false;
        }

        $tmp = mysql_fetch_row($rs);
        return $tmp[0];
    }

    // 选库函数
    public function select_db() {
        $sql = 'use ' . $this->db;
        return $this->query($sql);
    }

    // 设置字符集的函数
    public function setChar() {
        $sql = 'set names utf8';
        return $this->query($sql);
    }
}








