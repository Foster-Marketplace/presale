import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@material-ui/core/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@material-ui/core/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
    backgroundColor: 800,
    borderRadius: 5,
    backgroundColor: '#1a90ff',
}));

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
  );
}