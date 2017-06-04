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
        news_cat 方法
        作用: 根据cat查询新闻
        parms: varchar cat
        return: array /false
    */
    public function news_cat($cat) {
        $sql = 'select * from news where cat=' . $cat;

        return $this->db->getAll($sql);
    }


   
}





