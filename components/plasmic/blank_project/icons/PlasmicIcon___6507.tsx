// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6507IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6507Icon(props: _6507IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 1"}
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

      <path d={"M.035.052h10.69V.035H.036v.017z"} fill={"currentColor"}></path>

      <path
        d={"M10.757.088H0V0h10.762v.057l-.005.03z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6507Icon;
/* prettier-ignore-end */
