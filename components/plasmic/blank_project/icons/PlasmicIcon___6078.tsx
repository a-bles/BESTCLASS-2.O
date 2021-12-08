// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6078IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6078Icon(props: _6078IconProps) {
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
        d={"M.82.817H0V.518h.757l.5-.518.215.209-.544.564L.82.817z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6078Icon;
/* prettier-ignore-end */
