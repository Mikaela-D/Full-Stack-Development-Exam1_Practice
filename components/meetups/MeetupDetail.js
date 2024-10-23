import { useRouter } from "next/router";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  const handleHomeButtonClick = () => {
    window.location.href = "/";
  };

  const addressLines = props.address.split("<br />");

  return (
    <section className={classes.container}>
      <div className={classes.main}>
        <div className={classes.details}>
          <div className={classes.descriptionContainer}>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.textContainer}>
              <h2>Description</h2>
              <p>{props.description}</p>
              <div className={classes.addressContainer}>
                {addressLines.map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.header}>
        <button onClick={navigateToHome} className={classes.buttonLeft}>
          Home Page
        </button>
        <h1>{props.title}</h1>
        <button onClick={handleHomeButtonClick} className={classes.buttonRight}>
          Home Page
        </button>
      </div>
    </section>
  );
}

export default MeetupDetail;
