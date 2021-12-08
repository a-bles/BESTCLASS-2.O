// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6207IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6207Icon(props: _6207IconProps) {
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
          "M.872 1.877L.522.362.083.496 0 .222.731 0l.35 1.514.671-.203.083.273-.963.293z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6207Icon;
/* prettier-ignore-end */
