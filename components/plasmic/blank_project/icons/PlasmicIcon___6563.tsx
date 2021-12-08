// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6563IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6563Icon(props: _6563IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
        d={"M.186 1.382L0 1.157 1.406 0l.186.225L.186 1.382z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6563Icon;
/* prettier-ignore-end */
