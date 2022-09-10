import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from '../utils/constants'
function ChannelCard({ channel }) {
    console.log(channel);
    return (
        <Box
            sx={{ height: '326pd', margin: 'auto', boxShadow: 'none', borderRadius: '20px', display: 'center', justifyContent: 'center', alignItems: 'center', width: { md: '320px', xs: '356px' } }}
        >
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channel?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Typography variant='h6'>
                        {channel?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: 5 }} />

                    </Typography>
                    {channel?.statistics?.subscriptionCount && (
                        <Typography>
                            {parseInt(channel?.statistics?.subscriptionCount)?.toLocaleString()}Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}
export default ChannelCard;