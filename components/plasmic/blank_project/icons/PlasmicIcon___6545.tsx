// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6545IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6545Icon(props: _6545IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M.245 4.361L0 4.201l1.98-3.065L1.99 0l.292.003-.012 1.22L.245 4.361z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6545Icon;
/* prettier-ignore-end */
