import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { useAnimals } from "../../contexts/AnimalContextProvider";

const FilterAnimals = () => {
  const { fetchByParams } = useAnimals();

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Categories</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="all"
        onChange={e => fetchByParams("name", e.target.value)}>
        <FormControlLabel value="cat" control={<Radio />} label="cat" />
        <FormControlLabel value="dog" control={<Radio />} label="dog" />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterAnimals;
