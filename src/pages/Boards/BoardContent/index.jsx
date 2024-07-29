
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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
import { ContentCopy, ContentPaste } from '@mui/icons-material'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupsIcon from '@mui/icons-material/Groups'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT ='58px'
const COLUMN_FOOTER_HEIGHT ='60px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      backgroundColor:'primary.main',
      width:'100%',
      height:(theme) => theme.trello.boardContentHeight,
      p:'10px 0'
    }}>
      <Box sx={{
        bgcolor:'inherit',
        width:'100%',
        height:'100%',
        display:'flex',
        overflowX:'auto',
        overflowY:'hidden',
        '&::-webkit-scrollbar-track': { m:2 }
      }}>
        {/* Box column */}
        <Box sx={{
          minWidth:'300px',
          maxWidth:'300px',
          bgcolor: (theme) => ( theme.palette.mode === 'dark' ? '#333643' : '#ebecf0' ),
          ml:2,
          borderRadius:'6px',
          height:'fit-content',
          maxHeight: (theme) => `calc( ${ theme.trello.boardContentHeight } - ${ theme.spacing(5) } )`
        }}>
          {/* header */}
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
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
              Column Title
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
          <Box sx={{
            m:'0px 5px',
            p:'0px 5px',
            display:'flex',
            flexDirection:'column',
            gap:1,
            overflowX:'hidden',
            overflowY:'auto',
            maxHeight: (theme) => `calc( ${theme.trello.boardContentHeight} - ${ theme.spacing(5) } - ${COLUMN_FOOTER_HEIGHT} - ${COLUMN_HEADER_HEIGHT} )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2) ',
              overflow:'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fvii2-1.fna.fbcdn.net/v/t39.30808-6/439341962_2110490395974614_8632686563167995770_n.jpg?stp=dst-jpg_p552x414&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHjVAQuefm0eqMn4aoVaRAUE6mr3Gq0aoUTqavcarRqhRP3uvImXdKW7pilAclKz81YLD6zVNmvCeHLxVzKUaXV&_nc_ohc=iJiyUM9mlCwQ7kNvgE7GInG&_nc_ht=scontent.fvii2-1.fna&oh=00_AYA-JzxdoFjHy0Qv2b7v1oRwO-xK5ifYD-3VQzq5OlQarw&oe=66AD68A5"
                title="green iguana"
              />
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>NguyenDuyQuang</Typography>
              </CardContent>
              <CardActions sx={{ p:'0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupsIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
              </CardActions>
            </Card>

            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            <Button startIcon={<AddCardIcon/>}>Add new card</Button>
            <Tooltip title="Drag to move"><DragHandleIcon sx={{ cursor:'pointer' }}/></Tooltip>
          </Box>

        </Box>
        {/* Box column 2*/}
        <Box sx={{
          minWidth:'300px',
          maxWidth:'300px',
          bgcolor: (theme) => ( theme.palette.mode === 'dark' ? '#333643' : '#ebecf0' ),
          ml:2,
          borderRadius:'6px',
          height:'fit-content',
          maxHeight: (theme) => `calc( ${ theme.trello.boardContentHeight } - ${ theme.spacing(5) } )`
        }}>
          {/* header */}
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
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
              Column Title
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
          <Box sx={{
            m:'0px 5px',
            p:'0px 5px',
            display:'flex',
            flexDirection:'column',
            gap:1,
            overflowX:'hidden',
            overflowY:'auto',
            maxHeight: (theme) => `calc( ${theme.trello.boardContentHeight} - ${ theme.spacing(5) } - ${COLUMN_FOOTER_HEIGHT} - ${COLUMN_HEADER_HEIGHT} )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{
              cursor:'pointer',
              boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2) ',
              overflow:'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fvii2-1.fna.fbcdn.net/v/t39.30808-6/439341962_2110490395974614_8632686563167995770_n.jpg?stp=dst-jpg_p552x414&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHjVAQuefm0eqMn4aoVaRAUE6mr3Gq0aoUTqavcarRqhRP3uvImXdKW7pilAclKz81YLD6zVNmvCeHLxVzKUaXV&_nc_ohc=iJiyUM9mlCwQ7kNvgE7GInG&_nc_ht=scontent.fvii2-1.fna&oh=00_AYA-JzxdoFjHy0Qv2b7v1oRwO-xK5ifYD-3VQzq5OlQarw&oe=66AD68A5"
                title="green iguana"
              />
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>NguyenDuyQuang</Typography>
              </CardContent>
              <CardActions sx={{ p:'0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupsIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
              </CardActions>
            </Card>

            <Card sx={{
              cursor:'pointer',
              boxShadow:'0, 0, 0, 0.2',
              overflow:'unset'
            }}>
              <CardContent sx={{ p:1.5, '&:last-child':{ p: 1.5 } }}>
                <Typography>cart 1</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            <Button startIcon={<AddCardIcon/>}>Add new card</Button>
            <Tooltip title="Drag to move"><DragHandleIcon sx={{ cursor:'pointer' }}/></Tooltip>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent

