import React, { useState, useEffect } from "react";

const Getall = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch("/students")
      .then((res) => res.json())
      .then((data) => {
        setParticipants(data);
      })
      .catch((error) => {
        console.error("Error fetching participants:", error);
      });
  }, []);

  return (
    <div>
      <h1>Participants</h1>
      <ul>
        {participants.map((participant) => (
          <li key={participant._id}>
            <div>No of Participant: {participant.noParticipant}</div>
            <div>Name 1: {participant.name1}</div>
            <div>Name 2: {participant.name2}</div>
            <div>College Name: {participant.clgname}</div>
            <div>Item: {participant.item}</div>
            <ul>__________________________</ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Getall;
