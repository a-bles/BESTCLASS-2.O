// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6229IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6229Icon(props: _6229IconProps) {
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
        d={"M12.131 0L0 3.677l.083.273L12.214.273 12.131 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6229Icon;
/* prettier-ignore-end */
