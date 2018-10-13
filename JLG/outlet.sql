/*
Navicat MySQL Data Transfer

Source Server         : pyd
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : outlet

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-13 17:51:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for jlggoodslist
-- ----------------------------
DROP TABLE IF EXISTS `jlggoodslist`;
CREATE TABLE `jlggoodslist` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` float(11,0) DEFAULT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jlggoodslist
-- ----------------------------
INSERT INTO `jlggoodslist` VALUES ('1', '益鑫泰专柜绅士商务休闲衬2+1件组', '【立10元】', '../images/s4_33062.jpg', '199', null);
INSERT INTO `jlggoodslist` VALUES ('2', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33060.jpg', '168', '3');
INSERT INTO `jlggoodslist` VALUES ('3', '一叶子黑松露舒缓紧纹蝶翼眼膜(韩束欢享节专档)', '【立10元】', '../images/s4_33058.jpg', '188', '45');
INSERT INTO `jlggoodslist` VALUES ('4', '益鑫泰专柜轻薄款商务时尚新品夹克+衬衣', '【立10元】', '../images/s4_33052.jpg', '298', '3');
INSERT INTO `jlggoodslist` VALUES ('5', 'U.S.POLO ASSN 时尚绅士衬衣125周年纪念款', '【立10元】', '../images/s4_33049.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES ('6', '(0元抽奖）SWISS MILITARY超时尚炫彩箱包8件组', '【立10元】', '../images/s4_33046.jpg', '2800', '3');
INSERT INTO `jlggoodslist` VALUES ('7', 'U.S.POLO ASSN 时尚五防休闲男裤组', '【立10元】', '../images/s4_33044.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES ('8', '(0元抽奖）海斯曼懒人健康运动机', '【立10元】', '../images/s4_33043.jpg', '998', '3');
INSERT INTO `jlggoodslist` VALUES ('9', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33037.jpg', '399', '3');
INSERT INTO `jlggoodslist` VALUES ('10', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33024.jpg', '398', '3');
INSERT INTO `jlggoodslist` VALUES ('11', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33019.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES ('12', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33018.jpg', '398', '3');
INSERT INTO `jlggoodslist` VALUES ('13', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33013.jpg', '248', '3');
INSERT INTO `jlggoodslist` VALUES ('14', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33012.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES ('15', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33010.jpg', '798', '3');
INSERT INTO `jlggoodslist` VALUES ('16', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33008.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES ('17', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33005.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES ('18', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_33001.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES ('19', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_32999.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES ('20', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_32998.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES ('21', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_32997.jpg', '999', '3');
INSERT INTO `jlggoodslist` VALUES ('22', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_32993.jpg', '559', '3');
INSERT INTO `jlggoodslist` VALUES ('23', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_32990.jpg', '669', '3');
INSERT INTO `jlggoodslist` VALUES ('24', '韩束魔力保湿BB霜超值套组(韩束欢享节专档)', '【立10元】', '../images/s4_32987.jpg', '889', '3');
INSERT INTO `jlggoodslist` VALUES (null, '益鑫泰专柜绅士商务休闲衬�?+1件组', '【立�?0元】', '../images/s4_33062.jpg', '199', null);
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33060.jpg', '168', '3');
INSERT INTO `jlggoodslist` VALUES (null, '一叶子黑松露舒缓紧纹蝶翼眼�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33058.jpg', '188', '45');
INSERT INTO `jlggoodslist` VALUES (null, '益鑫泰专柜轻薄款商务时尚新品夹克+衬衣', '【立�?0元】', '../images/s4_33052.jpg', '298', '3');
INSERT INTO `jlggoodslist` VALUES (null, 'U.S.POLO ASSN 时尚绅士衬衣125周年纪念�?', '【立�?0元】', '../images/s4_33049.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES (null, '�?元抽奖）SWISS MILITARY超时尚炫彩箱�?件组', '【立�?0元】', '../images/s4_33046.jpg', '2800', '3');
INSERT INTO `jlggoodslist` VALUES (null, 'U.S.POLO ASSN 时尚五防休闲男裤�?', '【立�?0元】', '../images/s4_33044.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES (null, '�?元抽奖）海斯曼懒人健康运动机', '【立�?0元】', '../images/s4_33043.jpg', '998', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33037.jpg', '399', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33024.jpg', '398', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33019.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33018.jpg', '398', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33013.jpg', '248', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33012.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33010.jpg', '798', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33008.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33005.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33001.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32999.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32998.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32997.jpg', '999', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32993.jpg', '559', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32990.jpg', '669', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32987.jpg', '889', '3');
INSERT INTO `jlggoodslist` VALUES (null, '益鑫泰专柜绅士商务休闲衬�?+1件组', '【立�?0元】', '../images/s4_33062.jpg', '199', null);
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33060.jpg', '168', '3');
INSERT INTO `jlggoodslist` VALUES (null, '一叶子黑松露舒缓紧纹蝶翼眼�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33058.jpg', '188', '45');
INSERT INTO `jlggoodslist` VALUES (null, '益鑫泰专柜轻薄款商务时尚新品夹克+衬衣', '【立�?0元】', '../images/s4_33052.jpg', '298', '3');
INSERT INTO `jlggoodslist` VALUES (null, 'U.S.POLO ASSN 时尚绅士衬衣125周年纪念�?', '【立�?0元】', '../images/s4_33049.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES (null, '�?元抽奖）SWISS MILITARY超时尚炫彩箱�?件组', '【立�?0元】', '../images/s4_33046.jpg', '2800', '3');
INSERT INTO `jlggoodslist` VALUES (null, 'U.S.POLO ASSN 时尚五防休闲男裤�?', '【立�?0元】', '../images/s4_33044.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES (null, '�?元抽奖）海斯曼懒人健康运动机', '【立�?0元】', '../images/s4_33043.jpg', '998', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33037.jpg', '399', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33024.jpg', '398', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33019.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33018.jpg', '398', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33013.jpg', '248', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33012.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33010.jpg', '798', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33008.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33005.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_33001.jpg', '299', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32999.jpg', '199', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32998.jpg', '189', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32997.jpg', '999', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32993.jpg', '559', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32990.jpg', '669', '3');
INSERT INTO `jlggoodslist` VALUES (null, '韩束魔力保湿BB霜超值套�?韩束欢享节专�?', '【立�?0元】', '../images/s4_32987.jpg', '889', '3');

-- ----------------------------
-- Table structure for sccar
-- ----------------------------
DROP TABLE IF EXISTS `sccar`;
CREATE TABLE `sccar` (
  `id` int(11) DEFAULT NULL,
  `yonghu` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `price` float(10,2) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sccar
-- ----------------------------

-- ----------------------------
-- Table structure for shougoodslist
-- ----------------------------
DROP TABLE IF EXISTS `shougoodslist`;
CREATE TABLE `shougoodslist` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `usname` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` float(255,0) DEFAULT NULL,
  `number` int(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shougoodslist
-- ----------------------------
INSERT INTO `shougoodslist` VALUES ('1', '依媚娇人', '无钢圈魅力美胸内�?', '【立10元】', 'images/t_1441621975358.jpg', '222', null);
INSERT INTO `shougoodslist` VALUES ('2', '依媚娇人', '无钢圈魅力美胸内�?', '【立10元】', 'images/t_1441621975647.jpg', '199', null);
INSERT INTO `shougoodslist` VALUES ('3', '依媚娇人', '无钢圈魅力美胸内�?', '【立10元】', 'images/t_144162197525.jpg', '333', null);
INSERT INTO `shougoodslist` VALUES ('4', '依媚娇人', '无钢圈魅力美胸内�?', '【立10元】', 'images/t_1441621975946.jpg', '565', null);
INSERT INTO `shougoodslist` VALUES ('5', '依媚娇人', '无钢圈魅力美胸内�?', '【立10元】', 'images/t_1441621975420.jpg', '322', null);
INSERT INTO `shougoodslist` VALUES ('6', '依媚娇人', '无钢圈魅力美胸内�?', '【立10元】', 'images/t_144162197552.jpg', '199', null);
INSERT INTO `shougoodslist` VALUES ('7', '依媚娇人', '无钢圈魅力美胸内�?', '【立10元】', 'images/t_1441621975742.jpg', '34', null);
INSERT INTO `shougoodslist` VALUES ('8', '金丝楠阴沉木组', '', '【立10元】', 'images/s3_31255.jpg', '199', null);
INSERT INTO `shougoodslist` VALUES ('9', '（半购销）ML无线多功能电动工具组', '', '【立10元】', 'images/s3_32763.jpg', '45', '3');
INSERT INTO `shougoodslist` VALUES ('10', '卡其乐魔术多功能衣架40+1', '', '【立10元】', 'images/s3_32509.jpg', '345', '45');
INSERT INTO `shougoodslist` VALUES ('11', '韩派5L电压力锅1+1组', '', '【立10元】', 'images/s3_31601.jpg', '999', '3');
INSERT INTO `shougoodslist` VALUES ('12', '维灵牌深海鱼油软胶囊血脂调理组', '', '【立10元】', 'images/s3_32459.jpg', '87', '3');

-- ----------------------------
-- Table structure for zhuce
-- ----------------------------
DROP TABLE IF EXISTS `zhuce`;
CREATE TABLE `zhuce` (
  `yonghu` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuce
-- ----------------------------
INSERT INTO `zhuce` VALUES ('1', '1');
INSERT INTO `zhuce` VALUES ('13457811112', '123456');
INSERT INTO `zhuce` VALUES ('13457811112', '123456');
SET FOREIGN_KEY_CHECKS=1;
