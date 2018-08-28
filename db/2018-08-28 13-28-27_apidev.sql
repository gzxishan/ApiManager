/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.21-log : Database - apidev
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `brief` varchar(200) DEFAULT NULL,
  `content` longtext NOT NULL,
  `click` int(11) NOT NULL DEFAULT '0',
  `type` varchar(20) NOT NULL DEFAULT 'PAGE',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `moduleId` varchar(50) NOT NULL DEFAULT 'top',
  `mkey` varchar(20) DEFAULT NULL COMMENT 'key，唯一键，页面唯一标识',
  `canDelete` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否可删除，可修key，默认可以',
  `category` varchar(50) DEFAULT NULL,
  `canComment` tinyint(4) NOT NULL DEFAULT '1',
  `commentCount` int(11) NOT NULL DEFAULT '0',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `markdown` text NOT NULL,
  `projectId` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mkey_UNIQUE` (`mkey`),
  KEY `index_mod_type_cat_seq_time` (`moduleId`,`type`,`category`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` varchar(50) NOT NULL,
  `articleId` varchar(50) NOT NULL,
  `content` varchar(200) NOT NULL,
  `userId` varchar(50) DEFAULT NULL,
  `parentId` varchar(50) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `reply` varchar(200) NOT NULL DEFAULT '',
  `updateTime` timestamp NOT NULL DEFAULT '2015-12-31 08:00:00',
  `userName` varchar(50) NOT NULL COMMENT '匿名',
  `avatarUrl` varchar(500) NOT NULL DEFAULT 'resources/avatar/avatar0.jpg' COMMENT '用户头像 ',
  PRIMARY KEY (`id`),
  KEY `index_articleId_seq_time` (`articleId`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `debug` */

DROP TABLE IF EXISTS `debug`;

CREATE TABLE `debug` (
  `id` varchar(50) NOT NULL COMMENT 'id',
  `name` varchar(100) NOT NULL COMMENT '文件夹名称',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `interfaceId` varchar(50) DEFAULT '',
  `moduleId` varchar(50) NOT NULL,
  `method` varchar(10) NOT NULL,
  `url` varchar(500) NOT NULL,
  `params` varchar(1000) NOT NULL,
  `headers` varchar(1000) NOT NULL,
  `paramType` varchar(100) NOT NULL,
  `version` int(11) NOT NULL DEFAULT '0',
  `uid` varchar(50) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `index_status_seq_createTime` (`status`,`sequence`,`createTime`),
  KEY `index_userId_seq_createTime` (`interfaceId`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `error` */

DROP TABLE IF EXISTS `error`;

CREATE TABLE `error` (
  `id` varchar(50) NOT NULL COMMENT '主键',
  `errorCode` varchar(50) NOT NULL COMMENT '错误码编码',
  `errorMsg` varchar(128) NOT NULL COMMENT '错误码描述',
  `projectId` varchar(50) NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  PRIMARY KEY (`id`),
  KEY `index_mod_seq_time` (`projectId`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `hot_search` */

DROP TABLE IF EXISTS `hot_search`;

CREATE TABLE `hot_search` (
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `times` int(11) NOT NULL DEFAULT '0' COMMENT '搜索次数',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NOT NULL DEFAULT '2015-12-31 08:00:00',
  `keyword` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT '搜索关键字',
  PRIMARY KEY (`id`),
  UNIQUE KEY `keyword_UNIQUE` (`keyword`),
  KEY `index_times` (`times`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Table structure for table `interface` */

DROP TABLE IF EXISTS `interface`;

CREATE TABLE `interface` (
  `id` varchar(50) NOT NULL COMMENT '主键',
  `url` varchar(200) NOT NULL COMMENT 'api链接',
  `method` varchar(50) NOT NULL COMMENT ' 请求方式',
  `param` text COMMENT '参数列表',
  `paramRemark` text COMMENT '请求参数备注',
  `requestExam` text COMMENT '请求示例',
  `responseParam` text COMMENT '返回参数说明',
  `errorList` text COMMENT '接口错误码列表',
  `trueExam` text COMMENT '正确返回示例',
  `falseExam` text COMMENT '错误返回示例',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否可用;0不可用；1可用;-1 删除',
  `moduleId` varchar(50) NOT NULL COMMENT '所属模块ID',
  `interfaceName` varchar(100) NOT NULL COMMENT '接口名',
  `remark` text,
  `errors` text COMMENT '错误码、错误码信息',
  `updateBy` varchar(100) DEFAULT NULL,
  `updateTime` timestamp NOT NULL DEFAULT '2015-12-31 08:00:00',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `version` varchar(20) NOT NULL DEFAULT '1.0' COMMENT '版本号',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `header` text,
  `fullUrl` varchar(255) NOT NULL DEFAULT '',
  `monitorType` int(11) NOT NULL DEFAULT '0' COMMENT '监控类型，多选：\nNetwork("网络异常",1),Include("包含指定字符串",2),NotInclude("不包含指定字符串",3),NotEqual("不等于指定字符串",4);	\n',
  `monitorText` varchar(500) NOT NULL DEFAULT '' COMMENT '监控比较内容',
  `monitorEmails` varchar(200) DEFAULT NULL,
  `isTemplate` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否是模板',
  `projectId` varchar(50) NOT NULL DEFAULT '',
  `contentType` varchar(45) NOT NULL DEFAULT 'application/json' COMMENT '接口返回contentType',
  PRIMARY KEY (`id`),
  KEY `Index_fullUrl` (`fullUrl`),
  KEY `index_mod_seq_time` (`moduleId`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

/*Table structure for table `log` */

DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
  `id` varchar(50) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `modelClass` varchar(50) NOT NULL,
  `modelName` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL,
  `updateBy` varchar(50) NOT NULL DEFAULT '' COMMENT '操作人',
  `remark` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `identy` varchar(50) NOT NULL COMMENT '数据唯一主键',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `menu` */

DROP TABLE IF EXISTS `menu`;

CREATE TABLE `menu` (
  `id` varchar(50) NOT NULL DEFAULT '导航菜单编号',
  `menuName` varchar(50) NOT NULL COMMENT '菜单名称',
  `menuUrl` varchar(200) DEFAULT NULL COMMENT '菜单链接',
  `roleIds` varchar(512) DEFAULT NULL COMMENT '角色可见集合  （ID之间以逗号分隔）',
  `parentId` varchar(50) DEFAULT '0',
  `iconRemark` varchar(100) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL COMMENT '前端菜单、后台菜单',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  PRIMARY KEY (`id`),
  KEY `index_parentId` (`parentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `module` */

DROP TABLE IF EXISTS `module`;

CREATE TABLE `module` (
  `id` varchar(50) NOT NULL COMMENT '所属模块ID',
  `name` varchar(100) NOT NULL COMMENT '所属模块名称',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `url` varchar(100) NOT NULL DEFAULT '' COMMENT '模块地址',
  `canDelete` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1：可删除，0：不可删除',
  `remark` varchar(200) NOT NULL DEFAULT '' COMMENT '备注',
  `userId` varchar(50) NOT NULL DEFAULT '',
  `projectId` varchar(50) NOT NULL DEFAULT '',
  `templateId` varchar(50) DEFAULT NULL COMMENT '接口模板ID',
  `version` int(11) NOT NULL DEFAULT '0',
  `category` varchar(200) NOT NULL DEFAULT '' COMMENT '文章分类，多个分类以逗号分割，每个分类最多10个字',
  PRIMARY KEY (`id`),
  KEY `index_uid_seq_time` (`userId`,`sequence`,`createTime`),
  KEY `index_pid_seq_time` (`projectId`,`sequence`,`createTime`),
  KEY `index_templateId` (`templateId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `project` */

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` varchar(50) NOT NULL COMMENT '项目ID',
  `name` varchar(100) NOT NULL COMMENT '项目名称',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '2：推荐项目，3，管理员管理项目，4，管理管理&推荐项目，-1：默认debug项目',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `remark` varchar(200) NOT NULL DEFAULT '' COMMENT '备注',
  `userId` varchar(50) NOT NULL DEFAULT '',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1:私有项目，2公开项目，3公开推荐',
  `password` varchar(45) DEFAULT NULL,
  `cover` varchar(200) NOT NULL DEFAULT 'resources/images/cover.png' COMMENT '项目封面',
  `luceneSearch` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否允许建立Lucene搜索',
  PRIMARY KEY (`id`),
  KEY `index_status_seq_createTime` (`status`,`sequence`,`createTime`),
  KEY `index_userId_seq_createTime` (`userId`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `project_user` */

DROP TABLE IF EXISTS `project_user`;

CREATE TABLE `project_user` (
  `id` varchar(50) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `sequence` int(11) NOT NULL DEFAULT '0',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `projectId` varchar(50) NOT NULL,
  `userId` varchar(50) NOT NULL,
  `addModule` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以添加模块',
  `delModule` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否可以删除模块',
  `modModule` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可是修改模块',
  `addInter` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以添加接口',
  `delInter` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否可以删除接口',
  `modInter` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以修改接口',
  `addArticle` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以添加文章',
  `delArticle` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否可以删除文章',
  `modArticle` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以修改文章',
  `addSource` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以添加资源',
  `delSource` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否可以删除资源',
  `modSource` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以修改资源',
  `addDict` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以添加数据字典',
  `delDict` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否可以删除数据字典',
  `modDict` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以修改数据字典',
  `userEmail` varchar(45) DEFAULT NULL,
  `userName` varchar(50) DEFAULT NULL,
  `addError` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以添加错误码',
  `delError` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否可以删除错误码',
  `modError` bit(1) NOT NULL DEFAULT b'1' COMMENT '是否可以修改错误码',
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_user` (`userId`,`projectId`),
  KEY `index_uid_seq_time` (`userId`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` varchar(50) NOT NULL COMMENT '角色ID',
  `roleName` varchar(50) NOT NULL COMMENT '角色名称',
  `auth` text NOT NULL,
  `authName` text,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `setting` */

DROP TABLE IF EXISTS `setting`;

CREATE TABLE `setting` (
  `id` varchar(50) NOT NULL DEFAULT '',
  `mkey` varchar(20) NOT NULL,
  `value` varchar(500) NOT NULL,
  `remark` varchar(500) DEFAULT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `type` varchar(10) NOT NULL DEFAULT 'TEXT' COMMENT '设置类型（IMAGE,LINK,TEXT）',
  `canDelete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1：可删除，0：不可删除',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `show` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否在前端显示，1：是，0：否',
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`mkey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `source` */

DROP TABLE IF EXISTS `source`;

CREATE TABLE `source` (
  `id` varchar(50) NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sequence` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `name` varchar(100) NOT NULL COMMENT '资源名称',
  `updateTime` timestamp NOT NULL DEFAULT '2015-12-31 08:00:00',
  `moduleId` varchar(50) NOT NULL DEFAULT '0' COMMENT '模块ID',
  `remark` varchar(5000) NOT NULL DEFAULT '' COMMENT '备注',
  `filePath` varchar(200) NOT NULL DEFAULT '' COMMENT '文件目录',
  `projectId` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `index_mod_seq_time` (`moduleId`,`sequence`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL DEFAULT '',
  `trueName` varchar(50) NOT NULL DEFAULT '' COMMENT '用户真实姓名或昵称',
  `roleId` varchar(1024) NOT NULL DEFAULT '',
  `roleName` varchar(1024) NOT NULL DEFAULT '',
  `auth` varchar(1024) NOT NULL DEFAULT '',
  `authName` varchar(1024) NOT NULL DEFAULT '',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `sequence` int(11) NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `type` tinyint(4) NOT NULL DEFAULT '100' COMMENT '用户类型：1普通用户，100：管理员',
  `email` varchar(45) DEFAULT NULL,
  `avatarUrl` varchar(500) NOT NULL DEFAULT '' COMMENT '用户头像',
  `loginType` int(11) NOT NULL DEFAULT '0' COMMENT '0：账号登陆，1：github登陆，2：码云',
  `thirdlyId` varchar(100) DEFAULT NULL COMMENT '第三方唯一ID',
  `passwordSalt` varchar(20) DEFAULT NULL COMMENT '密码MD5盐',
  PRIMARY KEY (`id`),
  UNIQUE KEY `loginType_userName` (`userName`,`loginType`),
  UNIQUE KEY `loginType_Email` (`email`,`loginType`),
  KEY `index_thirdlyId` (`thirdlyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
