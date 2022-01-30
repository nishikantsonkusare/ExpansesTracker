import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ExpanseDate = props => {
    return (
        <Box>
            <Typography align="center" sx={{fontSize: "0.8rem", fontWeight: "bold"}}>
                {props.date.toLocaleString("en-US", {month: "long"})}
            </Typography>
            <Typography align="center" sx={{fontSize: "0.8rem", fontWeight: "bold"}}>
                {props.date.getFullYear()}
            </Typography>
            <Typography align="center" sx={{fontSize: "2rem", fontWeight: "bold"}}>
                {props.date.toLocaleString("en-US", {day: "numeric" })}
            </Typography>
        </Box>
    )
}

export default ExpanseDate;