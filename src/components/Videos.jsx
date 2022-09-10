import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import { VideoCard, ChannelCard } from '.';
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}

        </Box>
      ))}
    </Stack>
  )
};

export default Videos;
