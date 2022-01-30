import { Typography, Paper, Grid } from "@mui/material";
import ExpanseDate from "./ExpanseDate";

const ExpanseItem = (props) => {
    return (
        <Paper elevation={5} sx={{padding:2, m:1}}>
            <Grid container alignItems="center">
                <Grid item xs={3}>
                    {/* <Typography>{props.date}</Typography> */}
                    <ExpanseDate date={props.date} />
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" pl={1} fontWeight="bolder">{props.title}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography fontWeight="bold" fontSize="1.2rem">Rs.{props.amount}</Typography>
                </Grid>
            </Grid>                    
        </Paper>
    )
}

export default ExpanseItem;