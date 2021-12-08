// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6099IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6099Icon(props: _6099IconProps) {
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
        d={"M.217 1.98L.048.132A5.51 5.51 0 01.217 1.98z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.203 2.213L0 0l.076.11a5.49 5.49 0 01.175 1.875l-.048.228zM.128.622l.072.795A8.601 8.601 0 00.128.622z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6099Icon;
/* prettier-ignore-end */
