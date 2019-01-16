<<<<<<< HEAD
import { MdApps } from 'react-icons/md'
=======
import MdApps from 'react-icons/lib/md/apps'
>>>>>>> first commit

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  liveEdit: true
}
