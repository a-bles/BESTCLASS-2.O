// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6254IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6254Icon(props: _6254IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M.286 4.801L0 4.8l.034-3.134.053-.109L1.512.396l1.3-.393L2.887 0l1.357.303-.062.279L2.857.287 1.62.663.318 1.735.286 4.801z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6254Icon;
/* prettier-ignore-end */
