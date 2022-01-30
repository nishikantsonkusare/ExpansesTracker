import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useState } from "react";
import NewExpanseForm from "./NewExpanseForm";

const NewExpanse = (props) => {

    const [openForm, setOpenForm] = useState(false);

    const handleForm = () => {
        setOpenForm(true);
    }
    const handleClose = (value) =>{
        setOpenForm(value);
    }

    const handleNewExpanse = (Expanse) => {
        props.getExpanse({id: Math.random(), ...Expanse});
    }

    return (
            <>
                <Box sx={{position: 'absolute', bottom: "5%", right:"5%", zIndex: 'tooltip',}}>
                    <Fab color="primary" onClick={handleForm}>
                        <AddIcon />
                    </Fab>
                </Box>
                {openForm && <NewExpanseForm setForm={handleClose} showNewExpanseForm={openForm} getNewExpanse={handleNewExpanse}/> }
            </>

    )
}

export default NewExpanse;