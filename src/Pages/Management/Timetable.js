import React, { useEffect, useState } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import '../../Assets/Style/timetable.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Spin, notification } from "antd"
import { useLocation } from "react-router-dom"
import { getFacultyTimetable } from "../../Helper/TImetable"
import CardLoader from '../../Components/Basic/CardLoader'

const localizer = momentLocalizer(moment)


const ManagementTimetable = () => {

    const [weeklyData, setWeeklyData] = useState(null)
    const [events, setEvents] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const useQuery = () => {
        const { search } = useLocation()
        return React.useMemo(() => new URLSearchParams(search), [search])
    }
    const query = useQuery()
    let userId = query.get('userId')
    const [api, contextHolder] = notification.useNotification()

    const openNotification = ({ type, message, description }) => {
      api[type]({
        message: message,
        description: description
      })
    }
    const generateEventsForYear = (weeklyData, year) => {
        const daysOfWeek = [
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
        ]
        const events = []

        for (const weeklyEvent of weeklyData) {
            const dayIndex = daysOfWeek.indexOf(weeklyEvent.day.toLowerCase());
            if (dayIndex !== -1) {
                const startDate = moment(`${year}-01-01`).day(dayIndex);        
                while (startDate.year() === year) {
                    const startParts = weeklyEvent.start.split("T")[1].split(":");
                    const endParts = weeklyEvent.end.split("T")[1].split(":");
                    const startTime = moment(startDate)
                        .set({
                            hour: parseInt(startParts[0]),
                            minute: parseInt(startParts[1]),
                        })
                        .toDate();
        
                    const endTime = moment(startDate)
                        .set({
                            hour: parseInt(endParts[0]),
                            minute: parseInt(endParts[1]),
                        })
                        .toDate();
        
                        const event = {
                            batch: weeklyEvent.batch,
                            title: weeklyEvent.subject,
                            start: startTime, // Convert to JavaScript Date
                            end: endTime, // Convert to JavaScript Date
                            room: weeklyEvent.room,
                        };
                        events.push(event)
                        startDate.add(7, "days")
                    }
                }
        }

        return events
    }
    useEffect(() => {
        document.title = "Timetable | SoCIS"
        if(userId) {
            getFacultyTimetable({ userId: userId })
                .then((data) => {
                    setWeeklyData(data)
                    const year = 2023
                    const generatedEvents = generateEventsForYear(data, year)
                    setEvents(generatedEvents)
                    setLoading(false)
                })
                .catch((error) => {
                    return openNotification({type: 'error', message: 'Error Occurred!'})
                })
        }else {
            getFacultyTimetable({ userId: false })
                .then((data) => {
                    setWeeklyData(data)
                    const year = 2023
                    const generatedEvents = generateEventsForYear(data, year)
                    setEvents(generatedEvents)
                    setLoading(false)
                })
                .catch((error) => {
                    return openNotification({type: 'error', message: 'Error Occurred!'})
                })
        }
        
    }, [setWeeklyData, setEvents, setLoading, setError, userId])
    const eventStyleGetter = () => {
        const backgroundColor = "#3174ad"
        const style = {
          backgroundColor: backgroundColor,
          borderRadius: "0px",
          opacity: 0.8,
          color: "white",
          border: "0px",
          display: "block",
          height: '50%'
        }
        return {
          style: style,
        }
    }
    return(
        <ManagementBase>
        {contextHolder}
            <PageTitle title="Timetable" />
            { loading ? <CardLoader /> :
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              eventPropGetter={eventStyleGetter}
              style={{ height: "70vh" }} // Adjust height as needed
              components={{
                // increase the height of the event to show all the information
                event: ({ event }) => (
                  <div style={{ height: "200px" }}>
                    <div>{event.title}</div>
                    <div>{event.batch}</div>
                    <div>{event.room}</div>
                  </div>
                ),
              }}
            />}
        </ManagementBase>
    )
}


export default ManagementTimetable