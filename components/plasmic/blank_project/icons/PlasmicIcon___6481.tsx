// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6481IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6481Icon(props: _6481IconProps) {
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
        d={"M.067 2.321L.133.007A11.288 11.288 0 00.067 2.32z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.103 2.322h-.07c0-.228-.006-.46-.014-.684A6.63 6.63 0 01.099 0l.07.008-.066 2.314z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6481Icon;
/* prettier-ignore-end */
