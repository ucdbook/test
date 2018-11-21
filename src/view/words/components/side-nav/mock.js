import Mock from 'mockjs'
const Random = Mock.Random

const saveNewNav = req => {
  return []
}

const getNavs = req => {
    console.log(11111,'mock.js')
    return {
        data: [
            {
                name: '内容管理',
                id: 1,
                iconType: 'ios-book',
                type: 'MenuGroup',
                parentId: '',
            },
            {
                name: '文章管理',
                id: 11,
                parentId: 1,
            },
            {
                name: '评论管理',
                id: 12,
                parentId: 1,
            },
            {
                name: '文章A',
                id: 111,
                href: '#/111',
                parentId: 11,
            },
            {
                name: '文章B',
                id: 112,
                href: '#/112',
                parentId: 11,
            },
            {
                name: '评论A',
                id: 121,
                href: '#/121',
                parentId: 12,
            },
            {
                name: '评论B',
                id: 122,
                href: '#/122',
                parentId: 12,
            },
            {
                name: '内容管理B',
                id: 2,
                href: '#/2',
                iconType: 'ios-book',
                parentId: '',
            },
        ]
    }
}

export default [
    {
        apiName: /\/get_navs/,
        mockData: getNavs
    },
    {
        apiName: /\/save_new_nav/,
        mockData: saveNewNav
    }
]
