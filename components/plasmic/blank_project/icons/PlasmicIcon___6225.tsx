// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6225IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6225Icon(props: _6225IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M3.907 3.598l-.286-.003A3.394 3.394 0 002.442.768 2.587 2.587 0 00.082.432L0 .159A2.865 2.865 0 012.614.54a3.675 3.675 0 011.293 3.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6225Icon;
/* prettier-ignore-end */
