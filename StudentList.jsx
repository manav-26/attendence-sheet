import React from 'react';
import './StudentList.css';

const StudentList = ({ students, toggleAttendance }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul className="student-list">
        {students.map(student => (
          <li className="student-item" key={student.id}>
            {student.name}
            <input
              className="student-checkbox"
              type="checkbox"
              checked={student.attended}
              onChange={() => toggleAttendance(student.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
