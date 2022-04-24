export interface PostProps{
  id:number
  title:string
  content:string
  image?:string
  createAt:string
  columnId:number
}
export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

// 测试数据
export const testPosts:PostProps[] = [
  {
    id:1,
    title:'这是我的第一篇文章',
    content:'"this is a new post you very often"',
    createAt:'2022-4-3 10:40:22',
    columnId:1
  },
  {
    id:2,
    title:'这是我的第二篇文章',
    content:'"this is a new post you very often"',
    createAt:'2022-4-3 10:40:22',
    columnId:1
  }
]
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: '这是teat1专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
  },
  {
    id: 2,
    title: '这是teat2专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: '这是teat3专栏',
    description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: '这是teat4专栏',
    description: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]