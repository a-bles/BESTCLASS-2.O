// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6417IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6417Icon(props: _6417IconProps) {
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
        d={"M.243 19.105L0 18.92l.526-.694V0H.83v18.278l-.03.092-.557.735z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6417Icon;
/* prettier-ignore-end */
