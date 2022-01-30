import { Paper, Grid, Typography, AppBar, Toolbar } from "@mui/material";
import {Box} from "@mui/system";
import ExpanseFilter from "./Expanse/ExpanseFilter";
import Expanse from "./Expanse/Expanse";
import NewExpanse from "./New Expanse/NewExpanse";
import { useState } from "react";

const ExpanseData = [
    {
        id: 1,
        title: "Mobile Phone",
        amount: 12000,
        date: new Date(2021, 10, 7)
    }
]

const App = () => {

    const [expanse, setExpanse] = useState(ExpanseData);
    const [selectedYear, setSelectedYear] = useState('2021');

    const newExpanse = value => {
        setExpanse( (prevExpanse) => [value, ...prevExpanse]);
    };

    const selectYear = (value) => {
        setSelectedYear(value);
    }

    return (    
        <Grid container justifyContent="center">
            <Grid item lg={4} sm={6} xs={12}>
                <Paper elevation={5} sx={{position:'relative', height: "100vh"}}>

                    {/* Appbar code */}
                    <Box sx={{flexGrow: 1}}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" align="center" fontWeight="bold">Expanse Management Tool</Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    {/* Add New Expanse Code */}
                    <NewExpanse getExpanse={newExpanse} />

                    {/* Filter code */}
                    <ExpanseFilter year={selectedYear} selectYear={selectYear} />

                    {/* Expanse Item Code */}
                    <Box sx={{overflowY:"scroll", height: "80%"}}>
                        <Expanse selectYear={selectedYear} expanses={expanse} />
                    </Box>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default App;