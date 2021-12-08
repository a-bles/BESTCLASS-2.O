// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6048IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6048Icon(props: _6048IconProps) {
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
        d={"M.12.963L0 .69 1.55 0l.122.273L.12.963z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6048Icon;
/* prettier-ignore-end */
