// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5962IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5962Icon(props: _5962IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 19"}
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
          "M.292 18.494L0 18.434l.042-.21C2.88 4.614 17.711.045 17.861 0l.085.287C17.8.33 3.136 4.85.337 18.285l-.044.21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5962Icon;
/* prettier-ignore-end */
