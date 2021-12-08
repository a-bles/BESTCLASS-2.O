// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6505IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6505Icon(props: _6505IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 7"}
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
          "M.309 1.958v4.215l-.296.296s-.029-4.018 0-4.535c.17-3.096.208-2.01.296.024z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6505Icon;
/* prettier-ignore-end */
