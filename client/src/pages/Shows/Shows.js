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
    city: "louisville",
    state: "KY",
    ticketLink: "bandsintown.com",
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
                <h1>{shows.venue}</h1>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};
 
export default Shows;