// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6597IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6597Icon(props: _6597IconProps) {
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
          "M.292.772A.278.278 0 01.123.72.328.328 0 010 .446.462.462 0 01.305.014a.293.293 0 01.26.042.33.33 0 01.123.273.463.463 0 01-.304.432.3.3 0 01-.092.011zM.388.286a.197.197 0 00-.097.16A.064.064 0 00.3.483a.196.196 0 00.097-.16A.064.064 0 00.39.286z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6597Icon;
/* prettier-ignore-end */
