import React, { useState, useEffect, useReducer, useMemo } from "react";
import StudentForm from "./StudentForm";
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Breadcrumbs } from "@mui/material";

const studentReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "UPDATE":
            return state.map(student => student.id === action.payload.id ? action.payload : student);
        case "DELETE":
            return state.filter(student => student.id !== action.payload);
        case "SET":
            return action.payload;
        default:
            return state;
    }
}

const Student = () => {
    const [students, dispatch] = useReducer(studentReducer, []);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem("students"));
        if (storedStudents) {
            dispatch({ type: "SET", payload: storedStudents });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    const handleAddOrUpdateStudent = (student) => {
        if (editingStudent) {
            dispatch({ type: "UPDATE", payload: student });
            setEditingStudent(null);
        } else {
            dispatch({ type: "ADD", payload: student });
        }
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
    };

    const handleDeleteStudent = (id) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const overallAverageScore = useMemo(() => {
        if (students.length === 0) return 0;
        const totalScore = students.reduce((sum, student) => sum + (student.diemTK + student.diemGK + student.diemCK) / 3, 0);
        return (totalScore / students.length).toFixed(2);
    }, [students]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Student Management
            </Typography>
            <StudentForm
                onSubmit={handleAddOrUpdateStudent}
                initialData={editingStudent}
                isEditing={!!editingStudent}
            />
            
            <Typography variant="h5">Danh sách sinh viên</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Họ và tên</TableCell>
                            <TableCell>Điểm Thường Kì</TableCell>
                            <TableCell>Điểm Giữa Kì</TableCell>
                            <TableCell>Điểm Cuối Kì</TableCell>
                            <TableCell>Điểm trung bình</TableCell>
                            <TableCell>Sửa</TableCell>
                            <TableCell>Xóa</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.diemTK}</TableCell>
                                <TableCell>{student.diemGK}</TableCell>
                                <TableCell>{student.diemCK}</TableCell>
                                <TableCell>{((student.diemTK + student.diemGK + student.diemCK) / 3).toFixed(2)}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleEditStudent(student)}>Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="secondary" onClick={() => handleDeleteStudent(student.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h6" gutterBottom>
                Overall Average Score: {overallAverageScore}
            </Typography>
        </Container>
    );
}

export default Student;