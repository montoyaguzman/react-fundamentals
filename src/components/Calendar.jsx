import React from 'react';

const Calendar = () => {
  return (
        <div>
            Hoy es: {new Date().toLocaleDateString()}
        </div>
    );
}

export default Calendar;