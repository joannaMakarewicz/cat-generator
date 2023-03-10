import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {FormControl, FormControlLabel, TextField, RadioGroup,} from "@mui/material";
import Radio from "@mui/material/Radio";
import Item from "./Item";
import "./CatBox.scss";

function CatBox() {

  const [cat, setCat] = useState("");
  const [img, setImg] = useState("");
  const [radio, setRadio] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setRadio(target.value);
    }
  };

  useEffect(() => {
    const imageUrl = process.env.REACT_APP_CAT_KEY + cat;
    const waitTime = 1000;
    const fetchImage = async () => {
      const res = await fetch(imageUrl);
      if (res.status < 200 || res.status >= 300) {
        setErrorStatus(res.status);
      }
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
      setLoading(false);
    };

    if (cat !== "") {
      setLoading(true);
      setImg(null);
      setErrorStatus(null);
    }

    const catTimer = setTimeout(() => fetchImage(), waitTime);
    return () => {
      clearInterval(catTimer);
    };
  }, [cat, radio]);

  return (
    <Box id="box">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="box__container"
      >
        <Grid item sm={6} xs={12} class="box__grid">
          <Item id="box__item" sx={{ height: "40vh", width: "450px" }}>
            <h1 className="box__heading">Use form to generate cat's image</h1>
            <FormControl
              noValidate
              autoComplete="off"
              className="box__formControl"
            >
              <TextField sx={{marginBottom:'1em'}}
                placeholder="Add Cat Name"
                type="text"
                id="cat"
                name="cat"
                onChange={(e) => setCat(e.target.value)}
              />
              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  type="text"
                  value="red"
                  label="Second version"
                  control={<Radio />}
                  onChange={handleChange}
                />
                <FormControlLabel
                  type="text"
                  value="green"
                  label="Third version"
                  control={<Radio />}
                  onChange={handleChange}
                />
                <FormControlLabel
                  type="text"
                  value="blue"
                  label="Fourth version"
                  control={<Radio />}
                  onChange={handleChange}
                />
              </RadioGroup>
            </FormControl>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} class="box__grid">
          <Item id="box__item" sx={{ height: "40vh", width: "450px" }}>
            {loading && <h2>Loading...</h2>}
            {errorStatus && <h3>Cat's image couldn't be generated</h3>}
            <img src={img} alt="cat" className="cats__image" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CatBox;
