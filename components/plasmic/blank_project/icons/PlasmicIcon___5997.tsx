// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5997IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5997Icon(props: _5997IconProps) {
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
          "M.3 2.612H0V.025L.298 0A.337.337 0 10.92 0l.295.05a.898.898 0 01-.56.72L.608.785.562.77A.739.739 0 01.3.619v1.993z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5997Icon;
/* prettier-ignore-end */
