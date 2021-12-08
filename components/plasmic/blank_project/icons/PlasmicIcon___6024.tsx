// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6024IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6024Icon(props: _6024IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
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
          "M1.127 1.169h-.12L0 .72V.448L1.006 0h.121l1.008.448v.273l-1.008.448zM.428.584l.64.285.639-.285L1.067.3.428.584z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6024Icon;
/* prettier-ignore-end */
