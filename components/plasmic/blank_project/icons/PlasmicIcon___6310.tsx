// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6310IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6310Icon(props: _6310IconProps) {
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
        d={"M.614.68L.474.65 0 .208.194 0l.414.384.645-.195.083.273-.722.219z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6310Icon;
/* prettier-ignore-end */
