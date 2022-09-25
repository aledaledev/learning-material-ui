import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox
} from "@mui/material";
import { FavoriteBorder} from '@mui/icons-material'
import MoreVertIcon   from '@mui/icons-material/MoreVert'
import FavoriteIcon  from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import img1 from '../assets/image1.jpg'

const Post = () => {
  return (
    <Card sx={{margin:'0 0 20px'}}>
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="30%"
          image={img1}
          alt="Purple toys"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:'red'}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post