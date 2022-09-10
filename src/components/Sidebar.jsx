import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";

import { categories } from "../utils/constants";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((c) => (
        <button
          onClick={() => setSelectedCategory(c.name)}
          className="category-btn"
          style={{
            backgroundColor: c.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={c.name}
        >
          <span
            style={{
              color: c.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {c.icon}
          </span>
          <span style={{ opacity: c.name === selectedCategory ? "1" : "0.8" }}>
            {c.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
