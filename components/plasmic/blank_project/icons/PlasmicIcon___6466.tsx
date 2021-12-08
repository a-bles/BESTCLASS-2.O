// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6466IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6466Icon(props: _6466IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
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
        d={"M6.607.73H.58L0 .231.199 0l.495.424h5.913V.73z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6466Icon;
/* prettier-ignore-end */
