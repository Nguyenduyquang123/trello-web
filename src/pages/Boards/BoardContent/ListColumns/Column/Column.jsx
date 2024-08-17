import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Cloud from '@mui/icons-material/Cloud'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React from 'react'
import { Tooltip } from '@mui/material'
import { ContentCopy, ContentPaste, Opacity } from '@mui/icons-material'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sort'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


function Column( { column } ) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } })
  const dndKitColumnStyle = {

    // touchAction : 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const orderedCards =mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    <div ref={setNodeRef} style={dndKitColumnStyle} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth:'300px',
          maxWidth:'300px',
          bgcolor: (theme) => ( theme.palette.mode === 'dark' ? '#333643' : '#ebecf0' ),
          ml:2,
          borderRadius:'6px',
          height:'fit-content',
          maxHeight: (theme) => `calc( ${ theme.trello.boardContentHeight } - ${ theme.spacing(5) } )`
        }}
      >
        {/* header */}
        <Box sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Typography variant='h6' sx={{
            fontSize:'1rem',
            fontWeight:'bold',
            cursor:'pointer'
          }}>
            {column?.title}
          </Typography>
          <Box>
            <Tooltip title="more opsion">
              <KeyboardArrowDownIcon sx={{ color:'text.primary', cursor:'pointer' }}
                id="basic-button-dropdow"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="basic-menu-dropdow"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button-workspaces'
              }}
            >
              <MenuItem>
                <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                <ListItemText>Pase</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Remote this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* List card */}

        <ListCards cards={orderedCards} />

        {/* footer */}
        <Box sx={{
          height:(theme) => theme.trello.columnFooterHeight,
          p: 2,
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Button startIcon={<AddCardIcon/>}>Add new card</Button>
          <Tooltip title="Drag to move"><DragHandleIcon sx={{ cursor:'pointer' }}/></Tooltip>
        </Box>

      </Box>
    </div>
  )
}

export default Column