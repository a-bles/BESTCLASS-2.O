// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6300IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6300Icon(props: _6300IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        d={"M.013 0L0 1.057l.285.003L.298.003.013 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6300Icon;
/* prettier-ignore-end */
