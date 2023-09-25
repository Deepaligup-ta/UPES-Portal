import React, { useState } from "react";
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
import Sidebar_faculty from "../../SideBar/Sidebar-faculty";

const localizer = momentLocalizer(moment);

const Timetable = () => {
  const [events] = useState([
    {
      title: "Math Lecture",
      start: new Date(2023, 8, 25, 9, 0),
      end: new Date(2023, 8, 25, 10, 30),
    },
    {
      title: "Physics Lab",
      start: new Date(2023, 8, 25, 11, 0),
      end: new Date(2023, 8, 25, 12, 30),
    },
    {
      title: "Computer Science Lecture",
      start: new Date(2023, 8, 25, 14, 0),
      end: new Date(2023, 8, 25, 15, 30),
    },
  ]);
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
                Start: {event.start.toLocaleString()}
                <br />
                End: {event.end.toLocaleString()}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    ).toBlob();

    saveAs(blob, "faculty_timetable.pdf");
  };

  return (
    <div className="timetable">
      <Sidebar_faculty />
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">TIME TABLE</div>
        </div>

        <div className="ml-20 mt-28 timetable-page">
          <button onClick={exportTimetableAsPDF}>
            Export Timetable as PDF
          </button>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "70vh" }} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Timetable;
