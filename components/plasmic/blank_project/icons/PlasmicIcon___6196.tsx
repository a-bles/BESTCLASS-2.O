// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6196IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6196Icon(props: _6196IconProps) {
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
        d={
          "M.502 1.114C.744.574.63.355 0 .12.124.08.273-.029.366.008a.67.67 0 01.39.335c.057.282.083.57.076.858.02.355-.293.418-.492.577l-.1-.033.114-.413.148-.218z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6196Icon;
/* prettier-ignore-end */
