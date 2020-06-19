(function (w) {
    var baseURL = 'http://localhost:8080/api/v1';
    var api = {
        //最新资讯
        latest: baseURL + '/index/latest',
        //热点图
        hot: baseURL + '/index/hotpic',
        //文章热门排行
        rank: baseURL + '/index/rank',
        //最新评论
        comment: baseURL + '/index/latest_comment',
        //焦点关注
        attention: baseURL + '/index/attention',
        //文章类型
        category:baseURL+'/index/category',
    }
    w.api = api
}(window))