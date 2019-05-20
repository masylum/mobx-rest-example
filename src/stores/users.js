import { Collection, Model } from 'mobx-rest'
import { computed } from 'mobx'

class UserModel extends Model {
  @computed
  get color () {
    const str = this.get('name')
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    let colour = '#'
    for (let j = 0; j < 3; j++) {
      const value = (hash >> (j * 8)) & 0xFF
      colour += ('00' + value.toString(16)).substr(-2)
    }
    return colour
  }

  get initials () {
    const [first, last] = this.get('name').split(' ')
    return `${first[0]}${last[0]}`
  }
}

class UsersCollection extends Collection {
  url ()  { return `/users` }
  model () { return UserModel }
}

// singleton
export default new UsersCollection()
