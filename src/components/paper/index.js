import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "500px",
          height: 500,
        },
      }}
    >
        <Paper evolution= {1}>

            {props.children}
        </Paper>
    </Box>
  );
}
