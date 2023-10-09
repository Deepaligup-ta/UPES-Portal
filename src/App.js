import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Assets/Style/index.css"
import Login from "./Pages/Login"
import ManagementRoutes from './Routes/Management'
import FacultyRoute from "./Routes/Faculty"
import ManagementDashboard from "./Pages/Management/Dashboard"
import Password from "./Pages/Password"
import ManagementTimetable from "./Pages/Management/Timetable"
import MangementAnnouncement from "./Pages/Management/Announcement"
import NewAnnouncement from "./Pages/Management/NewAnnouncement"
import SingleAnnouncement from "./Pages/Management/SingleAnnouncement"
import ManagementProfile from "./Pages/Management/Profile"
import Course from "./Pages/Management/Course"
import NewPolicy from "./Pages/Management/NewPolicy"
import Policy from "./Pages/Management/Policy"
import FullPolicy from "./Pages/Management/FullPolicy"
import Faculty from "./Pages/Management/Faculty"
import FacultyDashboard from "./Pages/Faculty/Dashboard"
import FacultyTimetable from "./Pages/Faculty/Timetable"
import FacultyAnnouncement from "./Pages/Faculty/Announcement"
import ViewAnnouncement from "./Pages/Faculty/SingleAnnouncement"
import FacultyPolicy from "./Pages/Faculty/Policy"
import FullFacultyPolicy from "./Pages/Faculty/FullPolicy"
import FacultyCourse from "./Pages/Faculty/Course"
import FacultyProfile from "./Pages/Faculty/Profile"
import ManagementMessage from "./Pages/Management/Message"
import NewMessage from "./Pages/Management/NewMessage"
import SingleMessage from "./Pages/Management/SingleMessage"
import FacultyMessage from "./Pages/Faculty/Message"
import NewMessageFaculty from "./Pages/Faculty/NewMessage"
import SingleMessageFaculty from "./Pages/Faculty/SingleMessage"
import NewPostFaculty from "./Pages/Faculty/NewPost"
import FacultyPost from "./Pages/Faculty/Post"
import SinglePostFaculty from "./Pages/Faculty/SinglePost"
import ManagementPost from "./Pages/Management/Post"
import NewPostManagement from "./Pages/Management/NewPost"
import SinglePostManagement from "./Pages/Management/SinglePost"

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/new-password" element={<Password />} />
        <Route element={<FacultyRoute />}>
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/timetable" element={<FacultyTimetable />} />
          <Route path="/faculty/announcement/view" element={<FacultyAnnouncement />} />
          <Route path="/faculty/announcement/view/:id" element={<ViewAnnouncement />} />
          <Route path="/faculty/policy/view" element={<FacultyPolicy />} />
          <Route path="/faculty/policy/view/:id" element={<FullFacultyPolicy />} />
          <Route path="/faculty/course" element={<FacultyCourse/>}/>
          <Route path="/faculty/profile" element={<FacultyProfile/>}/>
          <Route path="/faculty/message/view" element={<FacultyMessage />} />
          <Route path="/faculty/message/view/:id" element={<SingleMessageFaculty />} />
          <Route path="/faculty/message/new" element={<NewMessageFaculty />} />
          <Route path="/faculty/post/new" element={<NewPostFaculty />} />
          <Route path="/faculty/post/view" element={<FacultyPost />} />
          <Route path="/faculty/post/view/:id" element={<SinglePostFaculty />} />
        </Route>
        <Route element={<ManagementRoutes />}>
          <Route path="/management/dashboard" element={<ManagementDashboard/>}/>
          <Route path="/management/timetable" element={<ManagementTimetable/>}/>
          <Route path="/management/message/view" element={<ManagementMessage />} />
          <Route path="/management/message/view/:id" element={<SingleMessage />} />
          <Route path="/management/message/new" element={<NewMessage />} />
          <Route path="/management/announcement/new" element={<NewAnnouncement/>}/>
          <Route path="/management/announcement/view" element={<MangementAnnouncement/>}/>
          <Route path="/management/announcement/view/:id" element={<SingleAnnouncement/>}/>
          <Route path="/management/faculty" element={<Faculty/>}/>|
          <Route path="/management/faculty/:userId" element={<ManagementProfile/>}/>
          <Route path="/management/profile" element={<ManagementProfile/>}/>
          <Route path="/management/course" element={<Course/>}/>
          <Route path="/management/policy/new" element={<NewPolicy/>}/>
          <Route path="/management/policy/view" element={<Policy/>}/>
          <Route path="/management/policy/view/:id" element={<FullPolicy/>}/>
          <Route path="/management/post/new" element={<NewPostManagement />} />
          <Route path="/management/post/view" element={<ManagementPost />} />
          <Route path="/management/post/view/:id" element={<SinglePostManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
