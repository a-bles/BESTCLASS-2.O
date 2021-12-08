// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6506IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6506Icon(props: _6506IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 7"}
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
          "M.308 1.958v4.511H.013s-.029-4.018 0-4.535c.169-3.096.207-2.01.295.024z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6506Icon;
/* prettier-ignore-end */
