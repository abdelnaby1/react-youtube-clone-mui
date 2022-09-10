import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { Navbar, Feed, VideoDetail, ChannelID, SearchFeed } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelID />} />
          <Route path="/Search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
export default App;
