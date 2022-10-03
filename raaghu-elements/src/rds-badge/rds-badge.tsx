import React from "react";
// import Button from "bootstrap/Button";
// import Badge from "bootstrap/Badge";
import './rds-badge.scss'
import "bootstrap/dist/css/bootstrap.min.css";

export interface RdsBadgeProps {
  label: string;
  number:number;
  size?: "small" | "large" | string;
  colorVariant: string;
}

const RdsBadge = (props: RdsBadgeProps) => {
    
  let size: "sm" | "lg" | undefined = undefined;
  if (props.size == "small") {
    size = "sm";
  } else if (props.size == "large") {
    size = "lg";
  }

  let space!: " ";

  return (
    <>
      {/* <Button variant="light" size={size}>
        {props.label} {space}
        <Badge bg={props.colorVariant}> {props.number} </Badge>
      </Button> */}
    </>
  );
};

export default RdsBadge;
