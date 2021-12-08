// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6522IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6522Icon(props: _6522IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 20"}
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
          "M.291 19.782H0L.189 3.195.652 2.15l.557-.17.392-1.774.68-.207.085.28-.517.156-.391 1.774-.594.18-.397.895-.176 16.498z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6522Icon;
/* prettier-ignore-end */
