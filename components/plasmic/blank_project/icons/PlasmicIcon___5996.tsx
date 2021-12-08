// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5996IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5996Icon(props: _5996IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.3 2.612H0V.025L.297 0A.608.608 0 00.61.466.62.62 0 00.923 0l.295.048a.891.891 0 01-.56.72L.613.785.566.769a.741.741 0 01-.264-.15L.3 2.612z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5996Icon;
/* prettier-ignore-end */
