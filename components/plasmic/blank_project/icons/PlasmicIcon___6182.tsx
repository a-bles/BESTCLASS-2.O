// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6182IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6182Icon(props: _6182IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6.018.775H0V.47h5.92L6.57 0l.18.247-.732.528z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6182Icon;
/* prettier-ignore-end */
