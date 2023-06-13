import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "./calendarComponent.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";
import { getEvents } from "../../app/api/eventAxios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import GetCookie from "../../cookies/JWT/GetCookie";


moment.locale("fr");

const localizer = momentLocalizer(moment);

const messages = {
    today: "Aujourd'hui",
    previous: "Précédent",
    next: "Suivant",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    agenda: "Agenda",
    date: "Date",
    time: "Heure",
    event: "Événement",
    noEventsInRange: "Aucun événement",
    showMore: (total) => `+ Voir plus (${total})`,
};

const CalendarComponent = () => {
    const curUser = useSelector(selectCurrentUser);
    const token = GetCookie("jwt");
    const [events, setEvents] = useState([
        {
            start: moment().toDate(),
            end: moment().add(1, "days").toDate(),
            title: "Some title",
        },
    ]);

    const fetchEvents = async () => {
        try {
            getEvents(token)
                .then((data) => {
                    setEvents(data.events)
                    console.log(data.events);
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }


    const handleSelect = ({ start, end }) => {
        const title = prompt("Enter event title:");
        if (title) {
            const newEvent = {
                start,
                end,
                title,
            };
            setEvents((prevEvents) => [...prevEvents, newEvent]);
        }
    };

    const handleEventChange = ({ event, start, end }) => {
        const updatedEvent = { ...event, start, end };
        setEvents((prevEvents) =>
            prevEvents.map((existingEvent) =>
                existingEvent === event ? updatedEvent : existingEvent
            )
        );
    };

    const handleEventDelete = (event) => {
        setEvents((prevEvents) =>
            prevEvents.filter((existingEvent) => existingEvent !== event)
        );
    };

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div className="CalendarComponent">
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                style={{ height: "100vh" }}
                messages={messages}
                selectable={true}
                onSelectSlot={handleSelect}
                onSelectEvent={handleSelect}
                onEventDrop={handleEventChange}
                onEventResize={handleEventChange}
                onSelecting={() => false}
                onDoubleClickEvent={handleEventDelete}
            />
        </div>
    );
};


export default CalendarComponent;
