import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-maldives.jpg",
    title: "A First Meetup",
    address: "Some address, Galway, Ireland",
    description: "This is a first meetup!",

    // Added by me
    telephone: "12345678",
    email: "aaa@bbb.com",
  },
  {
    id: "m2",
    image:
      "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-maldives.jpg",
    title: "A Second  Meetup",
    address: "Some other address, Galway, Ireland",
    description: "This is a second meetup!",

    // Added by me
    telephone: "12345678",
    email: "aaa@bbb.com",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
