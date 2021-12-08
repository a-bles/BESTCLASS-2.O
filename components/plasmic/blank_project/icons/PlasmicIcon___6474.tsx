// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6474IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6474Icon(props: _6474IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M18.041 18.898l-.044-.214C15.137 4.955.151.338 0 .293L.088 0C.24.046 15.397 4.713 18.295 18.623l.045.213-.299.062z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6474Icon;
/* prettier-ignore-end */
