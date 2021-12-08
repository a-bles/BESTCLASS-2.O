// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6320IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6320Icon(props: _6320IconProps) {
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
        d={
          "M.25 19.568L0 19.431l.47-.863L.668 0l.286.003-.217 18.671-.487.894z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6320Icon;
/* prettier-ignore-end */
