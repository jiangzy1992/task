<?php
defined('ACC')||exit('Access Denied');

class newsModel extends Model{
    
    /*
        功能:
        调用某方法,达到对news表的某种操作
    */

    /*
        addnews方法,
        作用: 添加新闻
        parms: array data
        return : bool
    */
    public function addNews($data) {
        $sql = "insert into news (newstitle,newscontent,cat) values ('$data[newstitle]','$data[newscontent]',$data[cat])";

        return $this->db->query($sql);
    }

    /*
        delNews方法
        作用: 删除新闻
        parms: id
        return : array /false

    */ 
    public function delNews($id) {
        $sql = "delete from news where id=" . $id;
        return $this->db->query($sql);
    }

    /*
        editNews方法
        作用: 删除新闻
        parms: data
        return : array /false

    */ 
    public function editNews($data) {
        $sql = "update news set newstitle="."('$data[newstitle]')".",newscontent="."('$data[newscontent]')".",cat="."('$data[cat]')"."where id="."('$data[id]')"; 
        return $this->db->query($sql);
    }


    /*
        find方法
        作用: 查询所有新闻
        parms: 无
        return : array /false

    */ 
     public function find() {
        $sql = 'select id,newstitle,newscontent,cat from news';
        return $this->db->getAll($sql);
     }


    /*
        count 方法
        作用: 统计新闻条数
        parms: 无
        return : int
    */

    public function count() {
        $sql = 'select count(*) from news';
        return $this->db->getOne($sql);
    }


    /*
        findByCat 方法
        作用: 根据cat查询新闻
        parms: varchar cat
        return: array /false
    */
    public function findByCat($cat) {
        $sql = 'select * from news where cat=' . $cat;

        return $this->db->getAll($sql);
    }

    /*
        findById 方法
        作用: 根据id查询新闻
        parms: id int
        return: array /false
    */
    public function findById($id) {
        $sql = 'select * from news where id=' . $id;

        return $this->db->getRow($sql);
    }
   
}





