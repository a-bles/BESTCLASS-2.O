// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6447IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6447Icon(props: _6447IconProps) {
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
        d={"M.125.035h1.223l.016.045H.157L.104.035h.021z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M1.413.116H.143L0 0h1.373l.04.116z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6447Icon;
/* prettier-ignore-end */
