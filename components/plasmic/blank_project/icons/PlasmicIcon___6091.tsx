// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6091IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6091Icon(props: _6091IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.136.553c.28.185.47.215.637.081C.917.518.94.361.842.129a.313.313 0 01.09.366.373.373 0 01-.347.265.483.483 0 01-.45-.207z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.543.794A.504.504 0 01.108.573L0 .42l.157.104C.428.705.599.73.75.608.884.501.9.362.81.144L.75 0l.115.104a.35.35 0 01.101.401.405.405 0 01-.423.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6091Icon;
/* prettier-ignore-end */
