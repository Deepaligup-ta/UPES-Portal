import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTimetable } from "../../../Helper/TImetable";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Sidebar_faculty from "../../SideBar/Sidebar";
import { Calendar } from "react-big-calendar";
const localizer = momentLocalizer(moment);

export const View_timetable = () => {
  const [events, setEvents] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const { userid } = useParams();

  useEffect(() => {
    // Fetch timetable data
    getTimetable(userid)
      .then((data) => {
        console.log("Fetched Timetable Data:", data);
        setWeeklyData(data); // Set the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching timetable:", error);
      });
  }, [userid]);

  useEffect(() => {
    // Function to generate events for the entire year
    const generateEventsForYear = (weeklyData, year) => {
      const daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
      const events = [];

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
              start: startTime,
              end: endTime,
              room: weeklyEvent.room,
            };
            events.push(event);

            // Move to the next occurrence of the day
            startDate.add(7, "days");
          }
        }
      }

      console.log("Generated Events:", events);
      return events;
    };

    // Generate events for the year 2023
    const year = 2023;
    const generatedEvents = generateEventsForYear(weeklyData, year);

    setEvents(generatedEvents);
  }, [weeklyData]);

  const eventStyleGetter = () => {
    const backgroundColor = "#3174ad";
    const style = {
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  return (
    <div>
      <Sidebar_faculty />
      <div
        className="ml-20 timetable-page h-full"
        style={{ overflowY: "scroll", height: "700px" }}
      >
        <div className="mt-28" style={{ overflowX: "auto" }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventStyleGetter}
            style={{ height: "100%" }}
            components={{
              event: ({ event }) => (
                <div style={{ height: "auto" }}>
                  <div>{event.title}</div>
                  <div>{event.batch}</div>
                  <div>{event.room}</div>
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};
