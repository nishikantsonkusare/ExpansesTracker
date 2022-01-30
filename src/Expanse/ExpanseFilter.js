import { MenuItem, Select, Typography, Box } from "@mui/material";
import { useState } from "react";

const ExpanseFilter = (props) =>{

    const [year, setYear] = useState(props.year);
    
    const handleChange = (event) => {
        setYear(event.target.value);
        props.selectYear(event.target.value);
    };

    return (
        <Box sx={{display:"flex", justifyContent: "right", alignItems:"center", m:2}}>
            <Typography component="span" sx={{marginRight: "10px"}}>Filter By Year: </Typography>
            <Select size="small" value={year} onChange={handleChange}>
                <MenuItem value="2019">2019</MenuItem>
                <MenuItem value="2020">2020</MenuItem>
                <MenuItem value="2021">2021</MenuItem>
            </Select>
        </Box>
    )
}

export default ExpanseFilter;