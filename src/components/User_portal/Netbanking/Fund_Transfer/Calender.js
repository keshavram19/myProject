import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './FundTransfer.css';

const Calandar = () => {
  const [date, setDate] = useState(new Date());

  return (  
    <div className='calandar-main'>
      <div className='calendar-container col-12'>
        <Calendar
          onChange={(value) => setDate(value)}
          value={date}
          selectRange={true}
        />
      </div>
      {Array.isArray(date) && date.length > 0 ? (
        <p className='calendar_text_center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='calendar_text_center'>
          <span className='bold'></span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}



export default Calandar;