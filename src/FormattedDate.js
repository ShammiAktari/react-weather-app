import React from "react";

export default function FormattedDate(props){
    console.log(props.date);
    const days= ["Saturday","Sunday","Monday","Teusday","Wedbesday","Thusday","Friday"];
    const day = days[props.date.getDay()];
    const hours = props.date.getHours();
    if(hours<10){
        hours = `0${hours}`
    }
    const minutes = props.date.getMinutes();
    if(minutes<10){
        minutes = `0${minutes}`
    }
    return <div> {day} {hours}:{minutes}h </div>;
    
}