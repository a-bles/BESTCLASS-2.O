// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5994IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5994Icon(props: _5994IconProps) {
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
          "M.3 2.612H0V.025L.297 0A.337.337 0 10.92 0l.295.048a.892.892 0 01-.56.72L.607.785.562.769a.737.737 0 01-.26-.15L.298 2.612z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5994Icon;
/* prettier-ignore-end */
