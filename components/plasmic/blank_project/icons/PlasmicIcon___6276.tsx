// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6276IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6276Icon(props: _6276IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.066 2.713L.78 2.71.8.726a.94.94 0 01-.179.162L.58.916.527.912C.247.89.05.655 0 .285L.282.246c.011.079.056.32.221.372A1.04 1.04 0 00.81 0l.284.022-.027 2.691z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6276Icon;
/* prettier-ignore-end */
