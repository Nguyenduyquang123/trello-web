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
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';



const MENU_CSS = {
  color:'primary.main',
  bgcolor: 'white',
  border:'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root':{
    color:'primary.main'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}

function BoardBar() {
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
      borderTop: '1px solid #00bfa5'
    }}>

      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={MENU_CSS}
          icon={<DashboardIcon />}
          label="Nguyenduyquang"
          clickable
        />
        <Chip
          sx={MENU_CSS}
          icon={<VpnLockIcon />}
          label="Puclic/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_CSS}
          icon={<AddToDriveIcon />}
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
        <Button startIcon={<PersonAddAlt1Icon />} variant="outlined">Invite</Button>
        <AvatarGroup max={4} sx={{ '& .MuiAvatar-root':{ width: '34px', height: '34px', fontSize:'16px' } }}>
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
