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
        category: baseURL + '/index/category',
        //文章搜索
        search: baseURL + '/index/search',
        //文章详细信息
        article: baseURL + '/index/article',
        //发表评论
        publish_comment: baseURL + '/index/post_comment',
        //评论列表
        get_comment: baseURL + '/index/get_comment',
        
    }
    w.api = api
}(window))