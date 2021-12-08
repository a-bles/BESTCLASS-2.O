// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6503IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6503Icon(props: _6503IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 8"}
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
        d={"M.2.413v6.863l-.166.118S-.042.724.034.212C.11-.3.199.257.199.412z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6503Icon;
/* prettier-ignore-end */
