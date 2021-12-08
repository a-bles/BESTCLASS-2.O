// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6100IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6100Icon(props: _6100IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.035 2.124V.04h.023v2.09l-.023-.006z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M.093 2.179l-.046-.016-.02-.006L0 2.151V0l.093.008v2.17z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6100Icon;
/* prettier-ignore-end */
