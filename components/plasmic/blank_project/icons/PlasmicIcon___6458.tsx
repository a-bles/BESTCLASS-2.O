// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6458IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6458Icon(props: _6458IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 22"}
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
          "M.01 0c5.63 2.534 17.05 9.156 19.03 21.806l-.301.047C16.794 9.427 5.613 2.876 0 .33"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6458Icon;
/* prettier-ignore-end */
