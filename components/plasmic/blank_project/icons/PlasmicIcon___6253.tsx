// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6253IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6253Icon(props: _6253IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 2"}
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
          "M.084 1.059L0 .786 2.58.003 2.651 0l1.361.303-.063.279L2.626.287l-2.542.772z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6253Icon;
/* prettier-ignore-end */
