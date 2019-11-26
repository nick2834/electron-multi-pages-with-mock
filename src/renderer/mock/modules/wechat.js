import Mock from 'mockjs'

// 生成数据列表
var chatList = []
for (let i = 0; i < Math.floor(Math.random() * 100 + 1); i++) {
    chatList.push(Mock.mock({
        'id': '@id',
        'title': `@csentence()`, //标题
        'subtitle': `@cparagraph(10)`, //标题
        'chatImage': '@image(100x100, @color, #FFF, @character)'
    }))
}

export function getList() {
    return {
        // isOpen: false,
        url: '/wechat/list',
        type: 'get',
        data: {
            'msg': 'success',
            'code': 0,
            'page': {
                'totalCount': chatList.length,
                'pageSize': 10,
                'totalPage': 1,
                'currPage': 1,
                'list': chatList
            }
        }
    }
}