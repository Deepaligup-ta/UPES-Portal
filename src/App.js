import React, { Suspense, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MsalProvider } from "@azure/msal-react"
import { PublicClientApplication } from "@azure/msal-browser"

import "./Assets/Style/index.css"
import ManagementRoutes from './Routes/Management'
import FacultyRoute from "./Routes/Faculty"
import Loader from "./Components/Loader"
import Check from "./Routes/Check"
import { getAuthToken } from "./Helper/Authentication"



const Login = React.lazy(() => import("./Pages/Login"))
const ManagementDashboard = React.lazy(() => import("./Pages/Management/Dashboard"))
const ManagementTimetable = React.lazy(() => import("./Pages/Management/Timetable"))
const MangementAnnouncement = React.lazy(() => import("./Pages/Management/Announcement"))
const SingleAnnouncement = React.lazy(() => import("./Pages/Management/SingleAnnouncement"))
const ManagementProfile = React.lazy(() => import("./Pages/Management/Profile"))
const Course  = React.lazy(() => import("./Pages/Management/Course"))
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
const FacultyEvaluation = React.lazy(() => import("./Pages/Faculty/Evaluate"))
const ManagementEvaluate = React.lazy(() => import("./Pages/Management/Evaluate"))
const ManagementMessage = React.lazy(() => import("./Pages/Management/Message"))
const SingleMessage = React.lazy(() => import("./Pages/Management/SingleMessage"))
const FacultyMessage = React.lazy(() => import("./Pages/Faculty/Message"))
const SingleMessageFaculty = React.lazy(() => import("./Pages/Faculty/SingleMessage"))
const NewPostFaculty = React.lazy(() => import("./Pages/Faculty/NewPost"))
const NewPostManagement = React.lazy(() => import("./Pages/Management/NewPost"))
const FacultyEvents = React.lazy(() => import('./Pages/Faculty/Events'))
const OutlookLogin = React.lazy(() => import("./Pages/OutlookLogin"))
const Result = React.lazy(() => import("./Pages/Result"))



const msalConfig = {
  auth: {
    clientId: "2f39588f-57c2-4be7-a4e8-0d29104506af",
    authority: `https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b`,
  },
}

const pca = new PublicClientApplication(msalConfig)

const App = () => {
  useEffect(() => {
    
  },[])
  return(
    <MsalProvider instance={pca}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loader />}><OutlookLogin /></Suspense>} />
          <Route path="/result" element={<Suspense fallback={<Loader />}><Result /></Suspense>} />
          <Route path="/link-account" element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
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
            <Route path="/faculty/post/new" element={<Suspense fallback={<Loader />}><NewPostFaculty /></Suspense>} />
            <Route path="/faculty/outlook/events" element={<Suspense fallback={<Loader />}><FacultyEvents /></Suspense>} />
            <Route path="/faculty/evaluate" element={<Suspense fallback={<Loader />}><FacultyEvaluation /></Suspense>} />
          </Route>
          <Route element={<ManagementRoutes />}>
            <Route path="/management/dashboard" element={<Suspense fallback={<Loader />}><ManagementDashboard/></Suspense>}/>
            <Route path="/management/timetable" element={<Suspense fallback={<Loader />}><ManagementTimetable/></Suspense>}/>
            <Route path="/management/message/view" element={<Suspense fallback={<Loader />}><ManagementMessage /></Suspense>} />
            <Route path="/management/message/view/:id" element={<Suspense fallback={<Loader />}><SingleMessage /></Suspense>} />
            <Route path="/management/announcement/view" element={<Suspense fallback={<Loader />}><MangementAnnouncement/></Suspense>}/>
            <Route path="/management/announcement/view/:id" element={<Suspense fallback={<Loader />}><SingleAnnouncement/></Suspense>}/>
            <Route path="/management/faculty" element={<Suspense fallback={<Loader />}><Faculty/></Suspense>}/>|
            <Route path="/management/faculty/:userId" element={<Suspense fallback={<Loader />}><ManagementProfile/></Suspense>}/>
            <Route path="/management/profile" element={<Suspense fallback={<Loader />}><ManagementProfile/></Suspense>}/>
            <Route path="/management/course" element={<Suspense fallback={<Loader />}><Course/></Suspense>}/>
            <Route path="/management/policy/view" element={<Suspense fallback={<Loader />}><Policy/></Suspense>}/>
            <Route path="/management/policy/view/:id" element={<Suspense fallback={<Loader />}><FullPolicy/></Suspense>}/>
            <Route path="/management/post/new" element={<Suspense fallback={<Loader />}><NewPostManagement /></Suspense>} />
            <Route path="/management/evaluate" element={<Suspense fallback={<Loader />}><ManagementEvaluate /></Suspense>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </MsalProvider>
  )
}
export default App
