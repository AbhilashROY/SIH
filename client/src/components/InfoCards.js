import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    paddingLeft: 75,
    paddingTop: 20,
    textAlign: "center",
    minHeight: 100,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div className="column1">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className={classes.heading} style={{ paddingLeft: `85px` }}>
              <span
                className="icon icon-map-marker"
                style={{ marginBottom: `10px` }}
              ></span>
              <h3>Heat Map</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Heat-map to analyze intensity of crimes in various regions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="column2">
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <div className={classes.heading} style={{ paddingLeft: `100px` }}>
              <span
                className="icon icon-check"
                style={{ marginBottom: `10px` }}
              ></span>
              <h3>Status</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Check and update crime status based on Active and Completed
              reports.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="column3">
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className={classes.heading}>
              <span
                className="icon icon-camera"
                style={{ marginBottom: `10px` }}
              ></span>
              <h3>Report Crime</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Receive images, videos and voice-notes of evidence/crime scene. Check crime scene description.
              Dont just be a witness, be responsible too. 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="column4">
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <div className={classes.heading}>
              <span
                className="icon icon-warning-sign"
                style={{ marginBottom: `10px` }}
              ></span>
              <h3>Panic Button</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Share your live location with your chosen contacts in case of emergencies.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
