import React from "react";
import MeetUpCard from "./meetup-card";

const MeetUpList = ({ meetupList }: MeetUpsList): React.ReactNode => {
  return meetupList.map((meetup) => (
    <MeetUpCard key={meetup.id} {...meetup} />
  ));
};

export default MeetUpList;
