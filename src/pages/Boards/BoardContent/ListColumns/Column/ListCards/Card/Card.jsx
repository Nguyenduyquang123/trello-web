import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupsIcon from '@mui/icons-material/Groups'
import Typography from '@mui/material/Typography'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import Button from '@mui/material/Button'


function Card( { card } ) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: card._id, data: { ...card } })

  const dndKitCardStyle = {
    // touchAction : 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #2ecc71' : undefined
  }


  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }
  return (
    <MuiCard ref={setNodeRef} style={dndKitCardStyle} {...attributes} {...listeners}
      sx={{
        cursor:'pointer',
        boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2) ',
        overflow:'unset'
      }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction() &&
      <CardActions sx={{ p:'0 4px 8px 4px' }}>
        {!!card?.memberIds.length && <Button size="small" startIcon={<GroupsIcon/>}>{card?.memberIds?.length}</Button> }
        {!!card?.memberIds.length && <Button size="small" startIcon={<GroupsIcon/>}>{card?.comments?.length}</Button> }
        {!!card?.memberIds.length && <Button size="small" startIcon={<GroupsIcon/>}>{card?.attachments?.length}</Button> }
      </CardActions>
      }
    </MuiCard>
  )
}

export default Card