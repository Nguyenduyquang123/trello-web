import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import { capitalizeFirstLetter } from '~/utils/formatter'


const MENU_CSS = {
  color:'white',
  bgcolor: 'transparent',
  border:'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root':{
    color:'white'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}

function BoardBar({ board } ) {

  return (
    <Box sx={{
      width:'100%',
      height:(theme) => theme.trello.boardbarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      gap: 2,
      paddingX: 2,
      overflowX:'auto',
      bgcolor: (theme) => ( theme.palette.mode === 'dark' ? '#34495e' : '#1976d2' )
    }}>

      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={MENU_CSS}
          icon={<DashboardIcon />}
          label= {board?.title}
          clickable
        />
        <Chip
          sx={MENU_CSS}
          icon={<VpnLockIcon />}
          label= { capitalizeFirstLetter( board?.type) }
          clickable
        />
        <Chip
          sx={MENU_CSS}
          icon={<AddToDriveIcon/>}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_CSS}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_CSS}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Button
          startIcon={<PersonAddAlt1Icon />}
          variant="outlined"
          sx={{
            color:'white',
            borderColor:'white',
            '&:hover':{
              borderColor:'white'
            }
          }}
        >
          nvite
        </Button>
        <AvatarGroup max={4} sx={{
          '& .MuiAvatar-root':{
            width: '36px',
            height: '36px',
            fontSize:'16px',
            border:'none',
            color:'white',
            cursor:'pointer',
            '&:first-of-type':{ bgcolor:'#a4b0be' }

          },
          gap:'3px'
        }}>
          <Tooltip title='quang'>
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/114758169?v=4" />
          </Tooltip>
          <Tooltip title='quang'>
            <Avatar alt="Remy Sharp" src="https://static.vinwonders.com/production/cach-tao-dang-chup-anh-40.jpg" />
          </Tooltip>
          <Tooltip title='quang'>
            <Avatar alt="Remy Sharp" src="https://media.baoquangninh.vn/upload/image/202310/medium/2137171_f1207af841cbfc6683b03f4d1fdab7ce.jpg" />
          </Tooltip>
          <Tooltip title='quang'>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgCNKqLZ0TS5Ckk7_EchwCjOGdAkPVKdrjA&s" />
          </Tooltip>
          <Tooltip title='quang'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='quang'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
