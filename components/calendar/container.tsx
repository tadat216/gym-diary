import React from "react";
import CalendarView from "./view";
import useCalendarNavigation from "./hooks";

export default function CalendarContainer() {
  const { handleDayPress } = useCalendarNavigation();

  return <CalendarView onDayPress={handleDayPress} />;
}
