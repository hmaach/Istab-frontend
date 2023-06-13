import React from 'react'
import {
    ScheduleComponent,
    Inject,
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda
} from '@syncfusion/ej2-react-schedule'

const Calandar = () => {
    return (
        <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    )
}

export default Calandar
