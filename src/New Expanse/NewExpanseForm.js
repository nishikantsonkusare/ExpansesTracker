import { Modal, TextField, Paper, Typography, Button } from "@mui/material";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const schema = yup.object({
    title: yup.string().required("Please enter title for expanse."),
    amount: yup.number().required("Please enter expanse amount.").min(100, 'Please enter atleast Rs. 100 expanse.').typeError("Please enter valid amount."),
    date: yup.date().required("Please select expanse date.")
});

const defaultValues = {
    title : "",
    amount : "",
    date : ""
}

const modalStyle = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs: "70%", sm: "40%", lg: "28%"},
    padding: 2,
}

const NewExpanseForm = (props) =>{

    const {control, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const handleClose = () =>{
        props.setForm(false);
    }

    const onSubmit = (data) =>{
        props.getNewExpanse(data);
        reset(defaultValues);
        props.setForm(false);
    }

    return (
        <Modal open={props.showNewExpanseForm} onClose={handleClose}>
            <Paper elevation={5} sx={modalStyle}>
                <Typography align="center" variant="h6" fontWeight="bold">New Expanse</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        render ={({field, formState})=> (
                            <TextField
                                {...field}
                                fullWidth
                                label="Title"
                                margin="normal"
                                error={formState.errors?.title}
                                helperText={formState.errors.title?.message}    
                            />
                        )}
                        control = { control }
                        defaultValue = {defaultValues.title}
                        name = "title"
                    />
                    <Controller
                        render ={({field, formState})=> (
                            <TextField
                                {...field}
                                fullWidth
                                label="Amount"
                                margin="normal"   
                                error={formState.errors?.amount}
                                helperText={formState.errors.amount?.message}     
                            />
                        )}
                        control = { control }
                        defaultValue = {defaultValues.amount}
                        name = "amount"
                    />
                    <Controller
                        render ={({field, formState})=> (
                            <TextField
                                {...field}
                                fullWidth
                                label="Date"
                                margin="normal"  
                                type="date"  
                                error={formState.errors?.date}
                                helperText={formState.errors.date?.message}    
                            />
                        )}
                        control = { control }
                        defaultValue = {defaultValues.date}
                        name = "date"
                    />
                    <Typography align="right" my={2}>
                        <Button type="button" color="secondary" variant="contained" sx={{mr: 2}} onClick={handleClose}>Cancel</Button>
                        <Button type="submit" color="success" variant="contained">Submit</Button>
                    </Typography>
                </form>
            </Paper>
        </Modal>
    )
}

export default NewExpanseForm;