import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    height: "100vh",
    margin: "0 40px",
    padding: theme.spacing(4),
    textAlign: "center",
  }));

export default Item;
