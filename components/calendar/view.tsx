import React from "react";
import { Calendar } from "react-native-calendars";
import { CalendarViewProps } from "./types";

export default function CalendarView({ onDayPress }: CalendarViewProps) {
  return (
    <Calendar
      onDayPress={(day) => {
        onDayPress(day.dateString);
      }}
    />
  );
}
