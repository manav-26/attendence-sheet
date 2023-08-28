import React, { useState } from 'react';
import StudentList from './StudentList';

const AttendanceSheet = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', attended: false },
    { id: 2, name: 'Student 2', attended: false },
    { id: 3, name: 'Student 3', attended: false },
    { id: 4, name: 'Student 4', attended: false },
    { id: 5, name: 'Student 5', attended: false },
    { id: 6, name: 'Student 6', attended: false },
    { id: 7, name: 'Student 7', attended: false },
    { id: 8, name: 'Student 8', attended: false },
    { id: 9, name: 'Student 9', attended: false },
    { id: 10, name: 'Student 10', attended: false },
    { id: 11, name: 'Student 11', attended: false },
    // Add more students
  ]);

  const toggleAttendance = studentId => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? { ...student, attended: !student.attended }
          : student
      )
    );
  };

  // Calculate the number of present students
  const presentStudents = students.filter(student => student.attended).length;

  return (
    <div>
      <h1>Attendance System</h1>
      <StudentList students={students} toggleAttendance={toggleAttendance} />
      <p>Number of Present Students: {presentStudents}</p>
    </div>
  );
};

export default AttendanceSheet;

