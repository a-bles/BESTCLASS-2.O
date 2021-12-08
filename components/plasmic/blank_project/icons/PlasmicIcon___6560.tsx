// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6560IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6560Icon(props: _6560IconProps) {
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
        d={"M.186 1.382L0 1.157 1.405 0l.187.225L.186 1.382z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6560Icon;
/* prettier-ignore-end */
