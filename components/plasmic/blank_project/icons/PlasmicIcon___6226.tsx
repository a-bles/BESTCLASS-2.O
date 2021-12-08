// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6226IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6226Icon(props: _6226IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 2"}
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
          "M3.189 1.787A24.448 24.448 0 000 .287L.104 0c1.112.428 2.192.936 3.232 1.52l-.147.267z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6226Icon;
/* prettier-ignore-end */
