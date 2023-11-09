import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Assets/Style/index.css"

import ManagementRoutes from './Routes/Management'
import FacultyRoute from "./Routes/Faculty"
import Loader from "./Components/Loader"
const Login = React.lazy(() => import("./Pages/Login"))
const ManagementDashboard = React.lazy(() => import("./Pages/Management/Dashboard"))
const Password = React.lazy(() => import("./Pages/Password"))
const ManagementTimetable = React.lazy(() => import("./Pages/Management/Timetable"))
const MangementAnnouncement = React.lazy(() => import("./Pages/Management/Announcement"))
const NewAnnouncement = React.lazy(() => import("./Pages/Management/NewAnnouncement"))
const SingleAnnouncement = React.lazy(() => import("./Pages/Management/SingleAnnouncement"))
const ManagementProfile = React.lazy(() => import("./Pages/Management/Profile"))
const Course  = React.lazy(() => import("./Pages/Management/Course"))
const NewPolicy = React.lazy(() => import("./Pages/Management/NewPolicy"))
const Policy  = React.lazy(() => import("./Pages/Management/Policy"))
const FullPolicy  = React.lazy(() => import("./Pages/Management/FullPolicy"))
const Faculty  = React.lazy(() => import("./Pages/Management/Faculty"))
const FacultyDashboard = React.lazy(() => import("./Pages/Faculty/Dashboard"))
const FacultyTimetable = React.lazy(() => import("./Pages/Faculty/Timetable"))
const FacultyAnnouncement = React.lazy(() => import("./Pages/Faculty/Announcement"))
const ViewAnnouncement = React.lazy(() => import("./Pages/Faculty/SingleAnnouncement"))
const FacultyPolicy = React.lazy(() => import("./Pages/Faculty/Policy"))
const FullFacultyPolicy = React.lazy(() => import("./Pages/Faculty/FullPolicy"))
const FacultyCourse = React.lazy(() => import("./Pages/Faculty/Course"))
const FacultyProfile = React.lazy(() => import("./Pages/Faculty/Profile"))
const ManagementMessage = React.lazy(() => import("./Pages/Management/Message"))
// const NewMessage = React.lazy(() => import("./Pages/Management/NewMessage"))
const SingleMessage = React.lazy(() => import("./Pages/Management/SingleMessage"))
const FacultyMessage = React.lazy(() => import("./Pages/Faculty/Message"))
// const NewMessageFaculty = React.lazy(() => import("./Pages/Faculty/NewMessage"))
const SingleMessageFaculty = React.lazy(() => import("./Pages/Faculty/SingleMessage"))
const NewPostFaculty = React.lazy(() => import("./Pages/Faculty/NewPost"))
const FacultyPost  = React.lazy(() => import("./Pages/Faculty/Post"))
const SinglePostFaculty = React.lazy(() => import("./Pages/Faculty/SinglePost"))
const ManagementPost = React.lazy(() => import("./Pages/Management/Post"))
const NewPostManagement = React.lazy(() => import("./Pages/Management/NewPost"))
const SinglePostManagement = React.lazy(() => import("./Pages/Management/SinglePost"))


const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
        <Route path="/new-password" element={<Suspense fallback={<Loader />}><Password /></Suspense>} />
        <Route element={<FacultyRoute />}>
          <Route path="/faculty/dashboard" element={<Suspense fallback={<Loader />}><FacultyDashboard /></Suspense>} />
          <Route path="/faculty/timetable" element={<Suspense fallback={<Loader />}><FacultyTimetable /></Suspense>} />
          <Route path="/faculty/announcement/view" element={<Suspense fallback={<Loader />}><FacultyAnnouncement /></Suspense>} />
          <Route path="/faculty/announcement/view/:id" element={<Suspense fallback={<Loader />}><ViewAnnouncement /></Suspense>} />
          <Route path="/faculty/policy/view" element={<Suspense fallback={<Loader />}><FacultyPolicy /></Suspense>} />
          <Route path="/faculty/policy/view/:id" element={<Suspense fallback={<Loader />}><FullFacultyPolicy /></Suspense>} />
          <Route path="/faculty/course" element={<Suspense fallback={<Loader />}><FacultyCourse/></Suspense>}/>
          <Route path="/faculty/profile" element={<Suspense fallback={<Loader />}><FacultyProfile/></Suspense>}/>
          <Route path="/faculty/message/view" element={<Suspense fallback={<Loader />}><FacultyMessage /></Suspense>} />
          <Route path="/faculty/message/view/:id" element={<Suspense fallback={<Loader />}><SingleMessageFaculty /></Suspense>} />
          {/* <Route path="/faculty/message/new" element={<Suspense fallback={<Loader />}><NewMessageFaculty /></Suspense>} /> */}
          <Route path="/faculty/post/new" element={<Suspense fallback={<Loader />}><NewPostFaculty /></Suspense>} />
          {/* <Route path="/faculty/post/view" element={<Suspense fallback={<Loader />}><FacultyPost /></Suspense>} /> */}
          {/* <Route path="/faculty/post/view/:id" element={<Suspense fallback={<Loader />}><SinglePostFaculty /></Suspense>} /> */}
        </Route>
        <Route element={<ManagementRoutes />}>
          <Route path="/management/dashboard" element={<Suspense fallback={<Loader />}><ManagementDashboard/></Suspense>}/>
          <Route path="/management/timetable" element={<Suspense fallback={<Loader />}><ManagementTimetable/></Suspense>}/>
          <Route path="/management/message/view" element={<Suspense fallback={<Loader />}><ManagementMessage /></Suspense>} />
          <Route path="/management/message/view/:id" element={<Suspense fallback={<Loader />}><SingleMessage /></Suspense>} />
          {/* <Route path="/management/message/new" element={<Suspense fallback={<Loader />}><NewMessage /></Suspense>} /> */}
          {/* <Route path="/management/announcement/new" element={<Suspense fallback={<Loader />}><NewAnnouncement/></Suspense>}/> */}
          <Route path="/management/announcement/view" element={<Suspense fallback={<Loader />}><MangementAnnouncement/></Suspense>}/>
          <Route path="/management/announcement/view/:id" element={<Suspense fallback={<Loader />}><SingleAnnouncement/></Suspense>}/>
          <Route path="/management/faculty" element={<Suspense fallback={<Loader />}><Faculty/></Suspense>}/>|
          <Route path="/management/faculty/:userId" element={<Suspense fallback={<Loader />}><ManagementProfile/></Suspense>}/>
          <Route path="/management/profile" element={<Suspense fallback={<Loader />}><ManagementProfile/></Suspense>}/>
          <Route path="/management/course" element={<Suspense fallback={<Loader />}><Course/></Suspense>}/>
          {/* <Route path="/management/policy/new" element={<Suspense fallback={<Loader />}><NewPolicy/></Suspense>}/> */}
          <Route path="/management/policy/view" element={<Suspense fallback={<Loader />}><Policy/></Suspense>}/>
          <Route path="/management/policy/view/:id" element={<Suspense fallback={<Loader />}><FullPolicy/></Suspense>}/>
          <Route path="/management/post/new" element={<Suspense fallback={<Loader />}><NewPostManagement /></Suspense>} />
          {/* <Route path="/management/post/view" element={<Suspense fallback={<Loader />}><ManagementPost /></Suspense>} /> */}
          {/* <Route path="/management/post/view/:id" element={<Suspense fallback={<Loader />}><SinglePostManagement /></Suspense>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
