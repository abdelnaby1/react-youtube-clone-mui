import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckCircle from '@mui/icons-material/CheckCircle';

import { Video } from "./";
import { fetchFromApi } from "../utils/fetchApi";

import { Videos, ChannelCard } from './'
const VideoDetail = () => {
  const id = useParams();

  return <Box>
    {id}
  </Box>;
};

export default VideoDetail;
