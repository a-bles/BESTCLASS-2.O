// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6087IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6087Icon(props: _6087IconProps) {
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
        d={"M.034.01c.177.808.228 1.638.15 2.462C.103 1.653.253.82.035.009z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.15 2.475a8.717 8.717 0 01-.026-.96A5.58 5.58 0 000 .02L.067 0A5.82 5.82 0 01.23 1.932c-.004.177-.01.36-.01.54l-.07.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6087Icon;
/* prettier-ignore-end */
