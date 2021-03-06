import React from 'react';
import TeacherTable from '../../common/TeacherTable';
import './index.css';

const StudentProfile = props => {
  return (
    <div className="schoolName">
      <p className="schoolName__tiltle">Gaza Primary School</p>
      <TeacherTable {...props} />
    </div>
  );
};
export default StudentProfile;
