export default {
  methods: {
    parsePost (post) {
      let result = post
        
      result = result.split(' ')
      result = result.map((string) => {
        let item = {}

        switch (string[0]) {
          case '#': item.type = 'hashtag'; break
          case '@': item.type = 'mention'; break
          default: item.type = 'text'; break
        }

        item.content = string

        return item
      })

      return result
    }
  }
}