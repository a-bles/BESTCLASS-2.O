// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6473IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6473Icon(props: _6473IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 31"}
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
          "M0 0a57.341 57.341 0 019.692 5.363c6.545 4.535 14.665 12.486 16.18 24.632l-.302.038C24.068 17.999 16.013 10.11 9.517 5.613A56.94 56.94 0 00.013.338"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6473Icon;
/* prettier-ignore-end */
