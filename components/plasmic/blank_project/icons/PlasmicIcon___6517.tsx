// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6517IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6517Icon(props: _6517IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 12"}
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
        d={"M.106 0L0 11.365l.291.003L.398.003.106 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6517Icon;
/* prettier-ignore-end */
