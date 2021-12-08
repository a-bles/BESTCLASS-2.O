// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6250IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6250Icon(props: _6250IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 6"}
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
          "M.285 5.264L0 5.26l.034-3.133.052-.109L1.511.861 4.35 0l.083.273-2.81.853L.318 2.198.285 5.264z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6250Icon;
/* prettier-ignore-end */
