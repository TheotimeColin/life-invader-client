import Api from '@/services/Api'

export default {
  fetchAllPosts () {
    return Api().post('posts')
  }
}