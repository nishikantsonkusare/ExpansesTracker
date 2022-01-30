import { Typography } from "@mui/material";
import ExpanseItem from "./ExpanseItem";
import ExpanseChart from "./ExpanseChart";

const Expanse = (props) => {

    const filterData = props.expanses.filter( data=>{
        return data.date.getFullYear().toString() === props.selectYear;
    })

    return(
        <>
            {filterData.length > 0 && <ExpanseChart expanses={filterData} /> }
            {filterData.length === 0 && <Typography align="center" my={3}>No data available for {props.selectYear}.</Typography> }

            { filterData.length > 0 && filterData.map( value => 
                <ExpanseItem key={value.id} title={value.title} amount={value.amount} date={value.date} />
            )}
        </>
    )
}

export default Expanse;