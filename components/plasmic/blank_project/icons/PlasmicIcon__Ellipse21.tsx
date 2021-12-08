// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse21Icon(props: Ellipse21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M19.25 10a9.25 9.25 0 11-18.5 0 9.25 9.25 0 0118.5 0z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={"M19.25 10a9.25 9.25 0 11-18.5 0 9.25 9.25 0 0118.5 0z"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={"M19.25 10a9.25 9.25 0 11-18.5 0 9.25 9.25 0 0118.5 0z"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Ellipse21Icon;
/* prettier-ignore-end */
