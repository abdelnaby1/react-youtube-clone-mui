import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Box from "@mui/material/Box";

import { Videos, ChannelCard } from './'
import { fetchFromApi } from "../utils/fetchApi";
const ChannelDetails = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState(null)
  const [channelVideos, setChannelVideos] = useState([]);
  console.log(channelVideos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then(data => setChannel(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet`)
      .then(data => setChannelVideos(data?.items));
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channel={channel} marginTop="-110px" />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={channelVideos.slice(1)} />
        </Box>
      </Box>
    </Box>
  )
};

export default ChannelDetails;
