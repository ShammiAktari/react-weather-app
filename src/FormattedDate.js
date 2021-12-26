import React from "react";

export default function FormattedDate(props){
    console.log(props.date);
    const days= ["Saturday","Sunday","Monday","Teusday","Wedbesday","Thusday","Friday"];
    const day = days[props.date.getDay()];
    const hours = props.date.getHours();
    
    
    const minutes = props.date.getMinutes();
    
    
    return <div> {day} {hours}:{minutes}h </div>;
    
}