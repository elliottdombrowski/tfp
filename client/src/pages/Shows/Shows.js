import React from 'react';

import './styles.scss';
import './query.scss';

const show = [
  {
    id: 1,
    venue: "house of blues",
    dateWeekdayAbv: "wed",
    dateMonth: "june",
    dateDay: "1",
    dateTime: "7:00",
    dateTime2: "pm",
    city: "chicago",
    state: "IL",
    ticketLink: "bandsintown.com",
    rsvpLink: "bandsintown.com",
  },
  {
    id: 1,
    venue: "empty bottle",
    dateWeekdayAbv: "thu",
    dateMonth: "june",
    dateDay: "2",
    dateTime: "7:00",
    dateTime2: "pm",
    city: "chicago",
    state: "IL",
    ticketLink: "bandsintown.com",
    rsvpLink: "bandsintown.com",
  },
  {
    id: 1,
    venue: "the hub",
    dateWeekdayAbv: "fri",
    dateMonth: "june",
    dateDay: "3",
    dateTime: "7:00",
    dateTime2: "pm",
    city: "cincinnati",
    state: "OH",
    ticketLink: "bandsintown.com",
    rsvpLink: "bandsintown.com",
  },
  {
    id: 1,
    venue: "spinelli's pizza",
    dateWeekdayAbv: "sat",
    dateMonth: "june",
    dateDay: "4",
    dateTime: "7:00",
    dateTime2: "pm",
    city: "louisville",
    state: "KY",
    ticketLink: "https://bandsintown.com/",
    rsvpLink: "bandsintown.com",
  },
];

const Shows = () => {
  return (
    <section className='shows-page'>
      <div className='shows-wrapper'>
        {
          show.map((shows) => {
            return (
              <div className='shows-output' key={shows.id}>
                <div className='show-location-wrapper'>
                  <h1 className='show-date'>
                    {shows.dateWeekdayAbv}, {shows.dateMonth} {shows.dateDay}
                  </h1>
                  <h1 className='show-venue'>{shows.venue} @ {shows.dateTime}{shows.dateTime2}</h1>
                </div>

                <div className='show-links-wrapper'>
                  <a
                    href={shows.ticketLink}
                    target='_blank'
                    className='show-ticket-btn'
                  >
                    TICKETS
                  </a>

                  <a
                    href={shows.rsvpLink}
                    target='_blank'
                    className='show-rsvp-btn'
                  >
                    RSVP
                  </a>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};
 
export default Shows;