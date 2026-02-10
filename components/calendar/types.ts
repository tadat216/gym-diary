export interface CalendarViewProps {
  onDayPress: (dateString: string) => void;
}

export interface HookReturns {
  handleDayPress: (dateString: string) => void;
}
