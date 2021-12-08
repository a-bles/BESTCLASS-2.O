// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6487IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6487Icon(props: _6487IconProps) {
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
        d={"M.31 2.065C.276 1.378.488.655.032.02c.34.652.164 1.366.278 2.045z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.275 2.07a4.986 4.986 0 01-.05-.747A2.775 2.775 0 000 .037L.06 0c.273.45.377.984.293 1.504-.008.185-.016.374-.008.558l-.07.008zM.263.676c.02.16.03.32.032.48a2.78 2.78 0 00-.032-.48z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6487Icon;
/* prettier-ignore-end */
