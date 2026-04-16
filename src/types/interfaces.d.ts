interface MeetupItem {
  index: number;
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
}

interface MeetUpsList {
    meetupList: MeetupItem[]
}
