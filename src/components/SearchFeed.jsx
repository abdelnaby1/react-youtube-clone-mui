import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import { fetchFromApi } from "../utils/fetchApi";

import { Videos } from "./";
const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams();
  console.log(videos);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data?.items));
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white", marginBottom: "20px" }}>
        Search Results for : <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
