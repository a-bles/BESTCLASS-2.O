// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6318IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6318Icon(props: _6318IconProps) {
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
          "M.083 1.167L0 .894.675.69 1.133 0l.238.157-.487.73-.077.059-.724.221z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6318Icon;
/* prettier-ignore-end */
