import { Box } from "@mui/material";

function CustomBox ({children}) {
    return (
        <Box
        component="div"
        sx={{
          display: "inline-block",
          border: "1px solid black",
          borderRadius: 8,
          p: 2,
          m: 2,
        }}
      > 
      
      {children} 
      </Box>
    )
}
export default CustomBox;