interface MeetupItem {
  id: string;
  title: string;
  image: string;
  address: string;
  date: string;
  description: string;
  createdAt: string;
}

interface MeetUpsList {
    meetupList: MeetupItem[]
}
