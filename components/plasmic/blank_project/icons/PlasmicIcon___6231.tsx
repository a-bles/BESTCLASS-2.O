// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6231IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6231Icon(props: _6231IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 4"}
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
        d={"M12.21 0L0 3.705l.083.273L12.293.273 12.208 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6231Icon;
/* prettier-ignore-end */
