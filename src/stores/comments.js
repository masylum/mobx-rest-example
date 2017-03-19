import { Collection, Model } from 'mobx-rest'

class CommentModel extends Model { }
export class CommentsCollection extends Collection {
  url ()  { return `/comments` }
  model () { return CommentModel }
}
