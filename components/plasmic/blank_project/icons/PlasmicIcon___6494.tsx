// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6494IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6494Icon(props: _6494IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.067.347l.162 1.668A4.575 4.575 0 00.067.347z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.196 2.02L0 0l.102.338c.158.545.214 1.115.164 1.68l-.07.001zM.16.916l.044.467A4.336 4.336 0 00.158.916H.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6494Icon;
/* prettier-ignore-end */
