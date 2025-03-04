import React, { useState, useRef } from "react";
import { TextField, Button, Box } from "@mui/material";

const StudentForm = ({ onSubmit, initialData, isEditing }) => {
    const [name, setName] = useState(initialData ? initialData.name : "");
    const [diemTK, setTK] = useState(initialData ? initialData.diemTK : "");
    const [diemGK, setGK] = useState(initialData ? initialData.diemGK : "");
    const [diemCK, setCK] = useState(initialData ? initialData.diemCK : "");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !diemTK || !diemGK || !diemCK) return;

        const studentData = {
            id: initialData ? initialData.id : Date.now(),
            name,
            diemTK: parseFloat(diemTK),
            diemGK: parseFloat(diemGK),
            diemCK: parseFloat(diemCK)
        };

        onSubmit(studentData);
        setName("");
        setTK("");
        setGK("");
        setCK("");
        inputRef.current.focus();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                inputRef={inputRef}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white', borderColor: 'white' } }}
            />  
            <TextField
                label="Điểm thường kì"
                type="number"
                value={diemTK}
                onChange={(e) => setTK(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white', borderColor: 'white' } }}
            />
            <TextField
                label="Điểm giữa kì"
                type="number"
                value={diemGK}
                onChange={(e) => setGK(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white', borderColor: 'white' } }}
            />
            <TextField
                label="Điểm cuối kì"
                type="number"
                value={diemCK}
                onChange={(e) => setCK(e.target.value)}
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white', borderColor: 'white' } }}
            />
            <Button type="submit" variant="contained" color="primary">
                {isEditing ? "Update" : "Add"} Student
            </Button>
        </Box>
    );
};

export default StudentForm;