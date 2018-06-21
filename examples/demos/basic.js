import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events'
import moment from 'moment-timezone'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Basic = () => (
  <BigCalendar
    events={events}
    views={allViews}
    step={30}
    timeslots={1}
    showMultiDayTimes
    defaultView="day"
    defaultDate={new Date(2015, 3, 1)}
    scrollToTime={new Date(1970, 1, 1, 7)}
    min={moment()
      .startOf('day')
      .toDate()}
  />
)

export default Basic
