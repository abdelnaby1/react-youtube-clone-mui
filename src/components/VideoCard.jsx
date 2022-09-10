import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

function VideoCard({ video: { id: { videoId }, snippet } }) {
    return (
        <Card sx={{ width: { md: '320px', xs: '100p%' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={`${snippet?.thumbnails?.high?.url || demoThumbnailUrl}`} alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 60) ||
                            demoVideoTitle
                        }

                    </Typography>
                </Link>
                <Link to={snippet.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="gray">
                        {snippet?.channelTitle.slice(0, 60) ||
                            demoChannelTitle
                        }
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 5 }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}
export default VideoCard