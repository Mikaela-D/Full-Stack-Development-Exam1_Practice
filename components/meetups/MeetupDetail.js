import classes from './MeetupDetail.module.css';

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
                    <p>{props.address}</p>
                </div>
            </div>

            <div className={classes.footer}>
                <div>Tel: {props.phone}</div>
                <div>Email: {props.email}</div>
            </div>
        </section>
    );
}

export default MeetupDetail;
