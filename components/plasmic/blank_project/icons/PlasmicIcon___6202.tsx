// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6202IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6202Icon(props: _6202IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 64"}
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
          "M.184 63.908L0 63.77.679.14.84 0c.123.017 12.293 1.919 12.097 15.732l-.474 44.347-.101.136-12.18 3.693zM.962.31l-.009.868-.666 62.4 11.893-3.607.472-44.243C12.832 3.036 2.394.586.962.31v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6202Icon;
/* prettier-ignore-end */
