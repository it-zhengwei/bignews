(function (w) {
    var baseURL = 'http://localhost:8080/api/v1';
    var bigapi = {
        //登录接口
        login: baseURL + "/admin/user/login",
        //获取用户信息接口
        info: baseURL + "/admin/user/info",
        //获取用户详情
        detail:baseURL+'/admin/user/detail',
        //编辑用户信息
        edit: baseURL + '/admin/user/edit',
        //获取文章类别
        categorylist: baseURL + '/admin/category/list',
        //新增类别
        categoryadd:baseURL+'/admin/category/add',
        //根据Id查询文章类别
        categorysearch: baseURL + '/admin/category/search',
        //编辑文章类别
        categoryedit: baseURL + '/admin/category/edit',
        //删除文章类别
        categorydelete: baseURL + '/admin/category/delete',
        //文章搜索
        articlequery: baseURL + '/admin/article/query',
        //发布文章
        articlepublish: baseURL + '/admin/article/publish',
        //根据Id获取文章信息
        articlesearch: baseURL + '/admin/article/search',
        //文章编辑
        articleedit: baseURL + '/admin/article/edit',
        //删除文章
        articledelete: baseURL + '/admin/article/delete',
        //获取统计数据
        datainfo: baseURL + '/admin/data/info',
        //日新增文章数量统计
        dataarticle: baseURL + '/admin/data/article',
        //各类型文章数量统计
        datacategory: baseURL + '/admin/data/category',
        //日文章访问量
        visit: baseURL + '/admin/data/visit',
        //文章评论搜索
        commentsearch: baseURL + '/admin/comment/search',
        //评论审核通过
        commentpass: baseURL + '/admin/comment/pass',
        //评论审核不通过
        reject: baseURL + '/admin/comment/reject',
        //删除评论
        delete:baseURL+'/admin/comment/delete'
    }
    w.bigapi = bigapi;
}(window))