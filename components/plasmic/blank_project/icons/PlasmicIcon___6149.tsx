// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6149IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6149Icon(props: _6149IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M18.054 18.913C17.056 13.998 13.38 5.042 0 .281L.101 0C13.62 4.81 17.334 13.877 18.346 18.852l-.292.061z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6149Icon;
/* prettier-ignore-end */
