// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6016IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6016Icon(props: _6016IconProps) {
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
          "M.369.738a.37.37 0 110-.738.37.37 0 010 .738zm0-.44a.07.07 0 00-.07.071c0 .078.14.078.14 0A.07.07 0 00.37.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6016Icon;
/* prettier-ignore-end */
