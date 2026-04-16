import React, { JSX } from "react";
import MeetUpCard from "./meetup-card";

const MeetUpList = ({ meetupList }: MeetUpsList): React.ReactNode => {
  return meetupList.map((meetup, index) => (
    <MeetUpCard key={meetup.id ?? index} {...meetup} />
  ));
};

export default MeetUpList;
