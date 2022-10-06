import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
  
     <FormControl required sx={{  mx: 0, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-required-label">Typ</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
    
          </MenuItem>
          <MenuItem value={10}>Osoba</MenuItem>
          <MenuItem value={20}>Firma</MenuItem>
        
        </Select>
       
      </FormControl>
      
      <FormControl item sx={{ mt:0, mx: 1, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-readonly-label">Numer</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
          
          </MenuItem>
          <MenuItem value={10}>Pesel</MenuItem>
          <MenuItem value={20}>NIP</MenuItem>
        
        </Select>
       
      </FormControl>
      
    </div>
  );
}