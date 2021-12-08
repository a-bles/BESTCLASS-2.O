// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6366IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6366Icon(props: _6366IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.378.756a.378.378 0 110-.756.378.378 0 010 .756zm0-.45a.073.073 0 00-.072.072c0 .078.145.078.145 0A.073.073 0 00.378.306z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6366Icon;
/* prettier-ignore-end */
