// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6416IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6416Icon(props: _6416IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 20"}
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
        d={"M.592 19.11l-.557-.666L0 18.346V0h.306v18.29l.522.624-.236.197z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6416Icon;
/* prettier-ignore-end */
