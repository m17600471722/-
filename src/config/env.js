/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

// let baseUrl = '//192.168.2.245:1001';
let baseUrl = "";
let routerMode = "hash";
let imgBaseUrl = "";

if (process.env.NODE_ENV == "development") {
  //测试环境地址
  baseUrl = "http://www.ipdkouh.cn/api/";//生产
  // baseUrl = "http://192.168.2.128:8100/";//测试
  imgBaseUrl = "/img/";
} else if (process.env.NODE_ENV == "production") {
  //生产环境地址
  baseUrl = "http://www.ipdkouh.cn/api/";//生产
  // baseUrl = "http://192.168.2.128:8100/";//测试
}

export { baseUrl, routerMode, imgBaseUrl };
