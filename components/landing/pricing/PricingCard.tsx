import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

interface Props {
  link: string;
  title: string;
  description: string;
  pricing: React.ReactElement;
  isHighlighted?: boolean;
}

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardHightlighted: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  title: {
    marginBottom: 20,
  },
  desc: {
    marginBottom: 20,
  },
  price: {},
  pricingContainer: { marginBottom: 20 },
}));

const PricingCard: React.FC<Props> = ({
  link,
  title,
  description,
  pricing,
  children,
  isHighlighted,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={
        isHighlighted
          ? classNames(classes.card, classes.cardHightlighted)
          : classes.card
      }
    >
      <Link href={link}>
        <a>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.desc}>
              {description}
            </Typography>
            <div className={classes.pricingContainer}>{pricing}</div>
            {children}
          </CardContent>
        </a>
      </Link>
    </Card>
  );
};

export default PricingCard;
