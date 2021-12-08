// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6488IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6488Icon(props: _6488IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        d={"M.032.02c.34.616.177 1.295.256 1.945C.253 1.31.429.628.032.02z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.252 1.968a5.537 5.537 0 01-.027-.64A2.582 2.582 0 000 .037L.06 0C.3.437.393.94.326 1.433c-.005.175-.012.356 0 .533l-.073.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6488Icon;
/* prettier-ignore-end */
