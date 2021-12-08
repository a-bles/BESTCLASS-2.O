// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6249IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6249Icon(props: _6249IconProps) {
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
        d={"M.062 0L0 .278l1.36.303.062-.278L.062 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6249Icon;
/* prettier-ignore-end */
