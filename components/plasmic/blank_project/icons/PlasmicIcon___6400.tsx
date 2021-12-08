// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6400IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6400Icon(props: _6400IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M.306 3.709H0A3.713 3.713 0 013.709 0v.305A3.407 3.407 0 00.306 3.709z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6400Icon;
/* prettier-ignore-end */
