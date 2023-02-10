import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./App.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  RadioGroup,
} from "@mui/material";
import Radio from "@mui/material/Radio";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: "500px",
  margin: "0 40px",
  padding: theme.spacing(4),
  textAlign: "center",
}));

function App() {
  return (
    <Box className="child">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <FormControl noValidate autoComplete="off">
              <TextField placeholder="Add Cat Name" type="text" id="cat" />
              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  type="text"
                  value="red"
                  label="Red"
                  control={<Radio />}
                />
                <FormControlLabel
                  type="text"
                  value="green"
                  label="Green"
                  control={<Radio />}
                />
                <FormControlLabel
                  type="text"
                  value="blue"
                  label="Blue"
                  control={<Radio />}
                />
              </RadioGroup>
            </FormControl>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <h2>Cat could not be generated</h2>
          </Item>
        </Grid>
        </Grid>
    </Box>
  );
}

export default App;
