// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6147IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6147Icon(props: _6147IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 30"}
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
          "M0 0a56.115 56.115 0 019.485 5.248c6.405 4.439 14.351 12.22 15.835 24.105l-.297.038C23.554 17.614 15.67 9.895 9.314 5.493A55.722 55.722 0 00.013.331"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6147Icon;
/* prettier-ignore-end */
