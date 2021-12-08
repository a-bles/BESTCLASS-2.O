// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6317IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6317Icon(props: _6317IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
        d={"M.614.681L.474.649 0 .21.194 0l.414.384.645-.195.083.273-.722.219z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6317Icon;
/* prettier-ignore-end */
