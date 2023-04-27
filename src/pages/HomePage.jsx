import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import EnrollmentForm from '../components/EnrollmentForm'
import UploadAssignment from '../components/UploadAssignment'
import AssignmentList from '../components/AssignmentList'

const HomePage = () => {
    return (
        <div class="flex flex-col h-screen">
          <Navbar />
          <div class="flex flex-row h-screen">
            <SideBar />
            <AssignmentList />
          </div>
        </div>
      );
}

export default HomePage