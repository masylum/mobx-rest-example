import { Collection, Model } from 'mobx-rest'
import users from './users'

class PostModel extends Model {
  get user () {
    return users.get(this.get('userId')) ||
      users.build({ name: 'Unknown user' }) // null object
  }
}

class PostsCollection extends Collection {
  url ()  { return `/posts` }
  model () { return PostModel }
}

// singleton
export default new PostsCollection()
