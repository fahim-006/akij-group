import { CardMedia, Card } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import styles from "./Teams.module.scss";
import { CardContent, Typography } from "@material-ui/core";

const SingleCard = ({ data }) => {
  return (
    <Card className={styles.team__content}>
      <div className={styles.team__wrapper}>
        <CardMedia
          component="img"
          image={data.image}
          width={"100%"}
          height={200}
          alt={data.name}
        />

        <div className={styles.team_info}>
          <CardContent>
            <Typography
              variant="h6"
              color="initial"
              className={styles.team_name}
            >
              {data.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              className={styles.team_position}
            >
              {data.position}
            </Typography>
            <Typography
              variant="subtitle2"
              color="initial"
              className={styles.team_email}
            >
              {data.email}
            </Typography>
          </CardContent>
        </div>

        {/* <Image
          src={data.image}
          alt={data.name}
          height={400}
          width={600}
          layout="responsive"
          objectFit="contain"
          loading="lazy"
        /> */}
      </div>
    </Card>
  );
};

export default SingleCard;
