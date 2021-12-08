// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6221IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6221Icon(props: _6221IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.158 0L0 .238l.324.215.158-.238L.158 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6221Icon;
/* prettier-ignore-end */
