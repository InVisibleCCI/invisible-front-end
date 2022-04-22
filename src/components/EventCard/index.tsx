import React from "react";
import Difficulty from './Difficulty';
import LikeButton from './LikeButton';
import {StarReview} from "../Svg/Star";
// import colors from '../../utils/styles';

const EventCard: React.FunctionComponent = ({ hit: event }: any) => {

    // const like = event.
    // let color = colors[1];

    const styles = {
        card: {
            width: '312px',
            height: '361px',
            position: 'relative',
            listStyle: 'none',
        } as const,

        image: {
            position: "absolute",
            width: "292px",
            height: "200px",

            // image
            backgroundImage: `url(${event.images[0].src})`,
            backgroundSize: "292px ",

            // left: "10px",
            top: "68px",
            filter: "drop-shadow(-3px 6px 12px rgba(0, 0, 0, 0.25))",
            borderRadius: "16px"
        } as const,

        textZone: {
            /* position */
            position: 'absolute',
            width: '292px',
            height: '167px',
            // left: '10px',
            top: '242px',

            /* color */
            background: '#EF9935',

            boxShadow: '-3px 6px 12px rgba(0, 0, 0, 0.25)',
            borderRadius: '0px 0px 16px 16px',

            /* Inside auto layout */
            flex: 'none',
            order: '0',
            flexGrow: '0',
            margin: '10px 0px',
        } as const,

        likeButton: {
            position: 'absolute',
            right: '20px',
            top: '13px',
        } as const,

        title: {
            fontFamily: "Montserrat Alternates",
            fontSize: "20px",
            fontWeight: "semi-bold",
            color: "#FFF",
            marginBottom: "11px",
            marginTop: "0px",
        },

        infos: {
            position: 'absolute',
            top: "37px",
            left: "15px",

        } as const,

        difficulty: {
            position: "absolute",
            bottom: "15px",
            right: "18px",
        } as const,

        reviews: {
            position: "absolute",
            bottom: "13px",
            left: "23px",

            /* text */
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: " 400",
            fontSize: "24px",
            lineHeight: "28px",

            color: "#FFF",
        } as const,

        distance: {
            /* text */
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: " 400",
            fontSize: "18px",
            lineHeight: "21px",

            color: "#FFF",
        },

        star: {
            // width: "24px",
            // height: "24px",
            // display: "inline-block",
            marginRight: "3px",
        },

    }
    return <section style={styles.card}>
        {console.log(event)}

        <div style={styles.image}></div>

        <div style={styles.textZone}>
            <span style={styles.likeButton}>
                {/* TODO add isLiked={event.isFavorite} when ok in DB*/}
                <LikeButton isLiked={false} />
            </span>
            <div style={styles.infos}>
                <h3 style={styles.title}>{event.name}</h3>
                {/* TODO replace with <p>{event.address.city} à {event.distance}Km</p> when ok in DB*/}
                <p style={styles.distance}>Strasbourg à 4.5 km</p>
            </div>

            <div style={styles.difficulty}>
                <Difficulty difficulty={event.difficulty} />
            </div>

            <span style={styles.reviews}>
                <StarReview />
                4.5
            </span>
        </div>
    </section>
}

export default EventCard