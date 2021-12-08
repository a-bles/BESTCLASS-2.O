// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6631IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6631Icon(props: _6631IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 5"}
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
          "M.814 4.73L0 4.003l.203-.228.686.612L15.289 0h2.227v.306H15.31L.814 4.729z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6631Icon;
/* prettier-ignore-end */
