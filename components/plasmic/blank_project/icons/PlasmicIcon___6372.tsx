// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6372IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6372Icon(props: _6372IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
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
          "M1.152 1.194h-.124L0 .736V.458L1.028 0h.124l1.03.458v.278l-1.03.458zM.438.597l.653.29.653-.29-.653-.29-.653.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6372Icon;
/* prettier-ignore-end */
