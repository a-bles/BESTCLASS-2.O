// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6614IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6614Icon(props: _6614IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M.085 1.193L0 .913.689.706 1.159 0l.243.16-.5.747-.078.058-.739.228z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6614Icon;
/* prettier-ignore-end */
