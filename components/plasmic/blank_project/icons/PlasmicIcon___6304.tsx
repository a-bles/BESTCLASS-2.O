// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6304IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6304Icon(props: _6304IconProps) {
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
          "M.084 1.167L0 .894.674.69l.46-.69.238.157-.488.73-.078.058-.722.222z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6304Icon;
/* prettier-ignore-end */
