import Mock from 'mockjs'

// 生成数据列表
var members = []
for (let i = 0; i < Math.floor(Math.random() * 99 + 1); i++) {
    let cname = Mock.mock('@cname')
    members.push(Mock.mock({
        'id': '@id',
        'name': cname, //标题
        'avatar': `@image(50x50, @color, #FFF, ${cname.substr(0,1)})`, //标题
    }))
}

export function getMembers() {
    return {
        // isOpen: false,
        url: '/wechat/room/member',
        type: 'get',
        data: {
            'msg': 'success',
            'code': 0,
            'page': {
                'totalCount': members.length,
                'pageSize': 10,
                'totalPage': 1,
                'currPage': 1,
                'list': members
            }
        }
    }
}