// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6164IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6164Icon(props: _6164IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.38.015a4.968 4.968 0 00-.337 2.127C.049 1.42.163.704.38.015z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.077 2.143l-.07-.003v-.072A4.844 4.844 0 01.348 0L.41.028a6.013 6.013 0 00-.313 1.794 8.127 8.127 0 01-.02.321z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6164Icon;
/* prettier-ignore-end */
