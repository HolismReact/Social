import CommentIcon from '@mui/icons-material/Comment';
import { ItemAction } from '@List'

const ViewComments = ({ entityType, entityGuid }) => {
    return <ItemAction
        title='View comments'
        icon={CommentIcon}
        goTo={`/comments?entityType=${entityType}&entityGuid=${entityGuid}`}
    />
}

export default ViewComments