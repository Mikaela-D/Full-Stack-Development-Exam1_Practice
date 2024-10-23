import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h1>{props.title}</h1>
      </div>

      <div className={classes.main}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.details}>
          <h2>Description</h2>
          <p>{props.description}</p>

          <div className={classes.addressContainer}>
            <p dangerouslySetInnerHTML={{ __html: props.address }} />
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <div>Tel: {props.telephone}</div>
        <div>Email: {props.email}</div>
      </div>
    </section>
  );
}

export default MeetupDetail;
