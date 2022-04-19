import { Props } from "react"
import React, { CSSProperties } from "react"
import Difficulty from './Difficulty';
import LikeButton from './LikeButton';
// import colors from '../../utils/styles';

const EventCard: React.FunctionComponent = ({ hit: event }: any) => {

    // const like = event.
    // let color = colors[1];

    const styles = {
        card: {
            width: '312px',
            height: '361px',
            // overflow: 'hidden',
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
            fontWeight:" 400",
            fontSize: "24px",
            lineHeight: "28px",

            color: "#FFF",
        } as const,

        distance: {
            /* text */
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight:" 400",
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
console.log(event)
    return <section style={styles.card}>

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
              <i style={styles.star}>
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5475 4.57767L9.35058 3.98457L7.47444 0.28611C7.4232 0.184848 7.3389 0.102875 7.23476 0.0530477C6.97359 -0.0723237 6.65621 0.0321525 6.52563 0.28611L4.64949 3.98457L0.452561 4.57767C0.336853 4.59374 0.231061 4.64679 0.150065 4.72715C0.0521452 4.82502 -0.00181317 4.95668 4.65248e-05 5.09321C0.00190622 5.22974 0.0594318 5.35996 0.159983 5.45527L3.19652 8.33399L2.47912 12.3989C2.4623 12.4935 2.47306 12.5907 2.51018 12.6796C2.54731 12.7686 2.60931 12.8456 2.68916 12.902C2.76901 12.9584 2.86352 12.9919 2.96196 12.9987C3.0604 13.0055 3.15883 12.9854 3.24611 12.9406L7.00003 11.0214L10.754 12.9406C10.8564 12.9936 10.9755 13.0113 11.0895 12.992C11.3771 12.9438 11.5705 12.6786 11.5209 12.3989L10.8036 8.33399L13.8401 5.45527C13.9227 5.37651 13.9773 5.27364 13.9938 5.16113C14.0384 4.87985 13.8368 4.61946 13.5475 4.57767Z" fill="white"/>
                  </svg>
              </i>
              4.5
          </span>
        </div>
    </section>
}

export default EventCard