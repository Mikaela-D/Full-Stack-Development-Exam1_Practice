import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg"
      address="Some address,<br />Barna,<br />Galway"
      description="First meetup description"
      title="Meeting 1"

      //Added by me
      
      telephone="12345678"
      email="aaa@bbb.com"
    ></MeetupDetail>
  );
}

export default MeetupDetails;
