// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6326IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6326Icon(props: _6326IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 20"}
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
        d={
          "M.298 19.324L0 19.264C1.034 14.177 4.83 4.911 18.643 0l.104.287C5.075 5.15 1.32 14.301.298 19.324z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6326Icon;
/* prettier-ignore-end */
