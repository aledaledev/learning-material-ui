import {Box} from '@mui/material'
import Post from './Post';
const Feed = () => {
  return (
    <Box bgcolor={"background.default"} flex={3} p={2}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>
  );
};

export default Feed;
