// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6309IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6309Icon(props: _6309IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 21"}
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
          "M.184 20.941L0 20.804.213.866l.1-.135L2.724 0l.183.138-.213 19.937-.1.136-2.409.73zM.498.973l-.21 19.639 2.123-.643L2.62.331.498.973z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6309Icon;
/* prettier-ignore-end */
