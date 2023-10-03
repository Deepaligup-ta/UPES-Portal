import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { saveAs } from "file-saver";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import "./Timetable.css";
import SidebarFaculty from "../../SideBar/Sidebar-faculty";
import { usePDF } from "react-to-pdf";
import { getAuthToken, getToken } from "../../../Helper/Authentication";

const localizer = momentLocalizer(moment);

const Timetable_Management = () => {
  const [events, setEvents] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  // Fetch data without dependency on weeklyData
  useEffect(() => {
    // Function to fetch data from the API
    fetch(`http://localhost:8000/api/timetable/faculty`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()[2]}`,
      },
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeeklyData(data); // Setting the data in the state
      })
      .catch((error) => {
        return error;
      });
  }, []); // Empty dependency array to run the effect only once

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
      const generatedEvents = [];

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
            generatedEvents.push(event);

            startDate.add(7, "days");
          }
        }
      }

      return generatedEvents;
    };

    // Generate events when weeklyData changes
    const year = 2023;
    const generatedEvents = generateEventsForYear(weeklyData, year);
    setEvents(generatedEvents);
  }, [weeklyData]);

  const styles = StyleSheet.create({
    // ... Your styles
  });

  const exportTimetableAsPDF = async () => {
    const blob = await pdf(
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Faculty Timetable</Text>
            {events.map((event, index) => (
              <Text key={index} style={styles.event}>
                {event.title}
                <br />
                Batch: {event.batch}
                <br />
                Start: {event.start.toLocaleString()}
                <br />
                End: {event.end.toLocaleString()}
                <br />
                Room: {event.room}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    ).toBlob();

    saveAs(blob, "faculty_timetable.pdf");
  };

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

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <div className="timetable">
      <SidebarFaculty />
      <div className="group " style={{ overflowY: "scroll" }}>
        <div className="overlap-group">
          <div className="text-wrapper">TIME TABLE</div>
        </div>

        <div
          className="ml-20 mt-28 timetable-page h-full"
          style={{ overflowY: "scroll", height: "500px" }}
        >
          <button onClick={() => toPDF()}>Download PDF</button>
          <div ref={targetRef}>
            Content to be generated to PDF
            <div style={{ overflowX: "auto" }}>
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
      </div>
    </div>
  );
};

export default Timetable_Management;
