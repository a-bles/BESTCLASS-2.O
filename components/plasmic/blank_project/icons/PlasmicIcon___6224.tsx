// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6224IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6224Icon(props: _6224IconProps) {
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
        d={
          "M.182 1.684L0 1.464 1.149.518.073.278.135 0l1.361.302.06.25L.182 1.684z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6224Icon;
/* prettier-ignore-end */
