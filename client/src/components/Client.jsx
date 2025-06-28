import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, green, blue, pink, teal, amber, indigo } from '@mui/material/colors';

const avatarColors = [deepOrange[500], deepPurple[500], green[500], blue[500], pink[500], teal[500], amber[500], indigo[500]];

function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % avatarColors.length;
  return avatarColors[idx];
}

const Client = ({ username }) => {
  const bgColor = stringToColor(username || 'U');
  return (
    <div className="d-flex align-items-center mb-3">
      <Avatar sx={{ bgcolor: bgColor }}>{(username || 'U').charAt(0).toUpperCase()}</Avatar>
      <span className='mx-2'>{username}</span>
    </div>
  )
}

export default Client