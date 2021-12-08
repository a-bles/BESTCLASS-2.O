// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6413IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6413Icon(props: _6413IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 20"}
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
          "M2.942 19.894H.152L0 19.741V.153L.153 0h2.789l.152.153v19.588l-.152.153zm-2.636-.306H2.79V.306H.306v19.282z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6413Icon;
/* prettier-ignore-end */
