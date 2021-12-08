// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6148IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6148Icon(props: _6148IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 19"}
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
          "M17.656 18.494l-.044-.21C14.812 4.85.148.332 0 .288L.086 0c.15.045 14.982 4.612 17.818 18.225l.044.209-.292.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6148Icon;
/* prettier-ignore-end */
