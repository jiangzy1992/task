-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-07-09 15:23:10
-- 服务器版本： 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(3) NOT NULL,
  `newstitle` varchar(30) DEFAULT NULL,
  `newscontent` text,
  `cat` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstitle`, `newscontent`, `cat`) VALUES
(1, '广州恒大夺中超五连冠 媒体称史无前例。我是百家新闻。', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是百家新闻。', '2'),
(2, '广州恒大夺中超五连冠 媒体称史无前例。我是图片新闻。', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是图片新闻。', '4'),
(3, '广州恒大夺中超五连冠 媒体称史无前例。我是推荐新闻。', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是推荐新闻。', '1'),
(4, '广州恒大夺中超五连冠 媒体称史无前例。我是推荐新闻。', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是推荐新闻。', '1'),
(5, '广州恒大夺中超五连冠 媒体称史无前例', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。', '1'),
(6, '广州恒大夺中超五连冠 媒体称史无前例。我是百家新闻。', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是百家新闻。', '2'),
(7, '广州恒大夺中超五连冠 媒体称史无前例', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。', '2'),
(8, '广州恒大夺中超五连冠 媒体称史无前例', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。', '2'),
(9, '广州恒大夺中超五连冠 媒体称史无前例', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。', '2'),
(10, '广州恒大夺中超五连冠 媒体称史无前例。我是社会新闻', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是社会新闻', '6'),
(11, '广州恒大夺中超五连冠 媒体称史无前例。我是娱乐新闻', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是娱乐新闻', '5'),
(12, '我是图片新闻。', '我是图片新闻。', '4'),
(13, '我是图片新闻。', '我是图片新闻。我是图片新闻。', '4'),
(14, '我是社会新闻', '我是社会新闻我是社会新闻', '6'),
(15, '我是社会新闻', '我是社会新闻我是社会新闻我是社会新闻', '6'),
(16, '我是军事新闻', '我是军事新闻我是军事新闻', '7'),
(17, '我是军事新闻', '我是军事新闻', '7'),
(18, '我是互联网新闻', '我是互联网新闻我是互联网新闻', '8'),
(19, '我是互联网新闻', '我是互联网新闻', '8'),
(20, '我是科技新闻', '我是科技新闻我是科技新闻', '9'),
(21, '我是科技新闻', '我是科技新闻我是科技新闻', '9'),
(22, '广州恒大夺中超五连冠 媒体称史无前例。我是地区新闻', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是推荐新闻。', '3'),
(23, '广州恒大夺中超五连冠 媒体称史无前例。我是地区新闻', '新华社照片，北京，2015年10月31日、足球——中超：广州恒大淘宝队夺得五连冠。我是推荐新闻。', '3'),
(24, '我是推荐新闻', '我是推荐新闻', '1'),
(25, '我是推荐新闻', '我是推荐新闻我是推荐新闻', '1'),
(26, '我是百家新闻', '我是百家新闻', '2'),
(27, '我是地区新闻', '我是地区新闻', '3'),
(28, '我是地区新闻', '我是地区新闻我是地区新闻', '3'),
(29, '我是图片新闻。', '我是图片新闻。', '4'),
(30, '我是娱乐新闻', '我是娱乐新闻我是娱乐新闻我是娱乐新闻', '5'),
(31, '我是娱乐新闻', '我是娱乐新闻', '5'),
(32, '123', '123', '3'),
(33, '123&lt;script&gt;', '123', '1');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(3) NOT NULL,
  `name` varchar(12) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `pass`) VALUES
(1, 'admin', '202cb962ac59075b964b07152d234b70');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat` (`cat`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
