import React, { useEffect, useState} from 'react'
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

  const [cat, setCat] = useState('');
  const [img,setImg] = useState('');
  const [radio, setRadio] = useState('');
  const [loading, setLoading]=useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  const handleChange = e =>{
    const target = e.target;
    if(target.checked){
      setRadio(target.value)
    }
  }

  useEffect(() => {
    const imageUrl = "https://cataas.com/cat/says/" + cat;
    const waitTime = 500;
    const fetchImage = async() => {
      const res = await fetch(imageUrl);
      if(res.status <200 || res.status >= 300) {
        setErrorStatus(res.status);
      }
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
      setLoading(false);
    }
    if(cat !== ""){
      setLoading(true);
      setImg(null);
      setErrorStatus(null);
    }

    const catTimer = setTimeout(() =>
      fetchImage(), waitTime);
    }, [cat, radio])

  return (
    <Box className="child">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
          {
              !cat && <h1>
              Use form to generate cat's image</h1>
            }
            <FormControl noValidate autoComplete="off">
              <TextField placeholder="Add Cat Name" type="text" id="cat" name="cat" onChange={(e) => setCat(e.target.value)} />
              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  type="text"
                  value="red"
                  label="Red"
                  control={<Radio />}
                  onChange={handleChange}
                />
                <FormControlLabel
                  type="text"
                  value="green"
                  label="Green"
                  control={<Radio />}
                  onChange={handleChange}
                />
                <FormControlLabel
                  type="text"
                  value="blue"
                  label="Blue"
                  control={<Radio />}
                  onChange={handleChange}
                />
              </RadioGroup>
            </FormControl>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item className='cats'>
            {loading && <h1>Loading...</h1>}
            {
              errorStatus && <h1>Cat's image couldn't be generated</h1>
            }
            <img src={img} alt='cat' className='cats__image'/>
          </Item>
        </Grid>
        </Grid>
    </Box>
  );
}

export default App;
