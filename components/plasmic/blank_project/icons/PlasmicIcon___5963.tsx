// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5963IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5963Icon(props: _5963IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 70"}
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
          "M.3 69.68H0V20.916C.3 5.77 15.872.056 16.028 0l.101.28C15.973.338.594 5.985.3 20.92v48.76z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5963Icon;
/* prettier-ignore-end */
