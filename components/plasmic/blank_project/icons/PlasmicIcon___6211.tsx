// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6211IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6211Icon(props: _6211IconProps) {
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
        d={"M.083 1.718L0 1.445l.559-.17L.835 0l.279.061L.8 1.5l-.718.218z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6211Icon;
/* prettier-ignore-end */
