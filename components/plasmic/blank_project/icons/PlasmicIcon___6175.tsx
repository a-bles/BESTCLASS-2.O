// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6175IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6175Icon(props: _6175IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
        d={"M1.261.035H.065L.049.078h1.182l.052-.043H1.26z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M1.243.113H0L.04 0h1.342l-.14.113z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6175Icon;
/* prettier-ignore-end */
