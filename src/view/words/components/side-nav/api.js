import axios from '@/libs/api.request'

export const saveNewNav = () => {
  return axios.request({
    url: '/save_new_nav',
    method: 'post'
  })
}
export const getNavs = () => {
  console.log(11111,'api.js')
    return axios.request({
      url: '/get_navs',
      method: 'post'
    })
  }
