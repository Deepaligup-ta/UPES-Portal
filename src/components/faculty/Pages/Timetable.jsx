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

const Timetable = () => {
  const [events, setEvents] = useState([]);
  const [weeklyData, setData] = useState([]);
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
        setData(data); // Setting the data in the state
      })
      .catch((error) => {
        return error;
      });
  }, []); // Empty dependency array to run the effect only once

  // })
  // const weeklyData = [
  //   {
  //     batch: "BCA_Sem-1_Batch_65117dcf060848f9e7a1ddfc",
  //     start: "2023-09-25T14:00:00.000Z",
  //     end: "2023-09-25T14:55:00.000Z",
  //     subject: "Computer Networks",
  //     room: "0",
  //     day: "monday",
  //   },
  //   {
  //     batch: "BCA_Sem-1_Batch_65117dcf060848f9e7a1ddfc",
  //     start: "2023-09-25T03:00:00.000Z",
  //     end: "2023-09-26T07:00:00.000Z",
  //     subject: "Computer Networks",
  //     room: "0000",
  //     day: "thursday",
  //   },
  //   {
  //     batch: "BCA_Sem-1_Batch_65117dcf060848f9e7a1ddfc",
  //     start: "2023-09-25T06:00:00.000Z",
  //     end: "2023-09-26T08:00:00.000Z",
  //     subject: "Computer Networks",
  //     room: "0000",
  //     day: "friday",
  //   },
  //   {
  //     batch: "BCA_Sem-1_Batch_65117dcf060848f9e7a1ddfc",
  //     start: "2023-09-25T08:00:00.000Z",
  //     end: "2023-09-26T10:00:00.000Z",
  //     subject: "Computer old Networks",
  //     room: "0000",
  //     day: "monday",
  //   },
  //   {
  //     batch: "BCA_Sem-1_Batch_65117dcf060848f9e7a1ddfc",
  //     start: "2023-09-25T06:00:00.000Z",
  //     end: "2023-09-26T08:00:00.000Z",
  //     subject: "New Networks",
  //     room: "0000",
  //     day: "monday",
  //   },
  //   // Add more weekly data as needed
  // ];

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

            // Use moment to correctly parse the time string and format the hour
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
            events.push(event);

            // Move to the next occurrence of the day
            startDate.add(7, "days");
          }
        }
      }

      return events;
    };

    // Generate events for the year 2023
    const year = 2023;
    const generatedEvents = generateEventsForYear(weeklyData, year);

    setEvents(generatedEvents);
  }, []);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#fff",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    header: {
      fontSize: 18,
      marginBottom: 10,
    },
    event: {
      fontSize: 14,
      marginBottom: 5,
      height: "auto",
    },
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
      <div className="group " style={{ overflowY: "scroll"  }}>
        <div className="overlap-group">
          <div className="text-wrapper">TIME TABLE</div>
        </div>

        <div
          className="ml-20 mt-28 timetable-page h-full"
          style={{ overflowY: "scroll", height: "500px" }} // Adjust height as needed
        >
          <button onClick={() => toPDF()}>Download PDF</button>
          <div ref={targetRef}>
            Content to be generated to PDF
            <div style={{ overflowX: "auto"}}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              eventPropGetter={eventStyleGetter}
              style={{ height: "100%" }} // Adjust height as needed
              components={{
                // increase the height of the event to show all the information
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

export default Timetable;
