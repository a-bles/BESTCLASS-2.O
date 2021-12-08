// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6127IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6127Icon(props: _6127IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 22"}
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
          "M.01 0c5.51 2.48 16.685 8.96 18.624 21.34l-.295.046C16.435 9.226 5.493 2.814 0 .323"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6127Icon;
/* prettier-ignore-end */
