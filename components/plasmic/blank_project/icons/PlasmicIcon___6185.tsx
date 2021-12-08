// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6185IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6185Icon(props: _6185IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 31"}
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
          "M26.32.331a57.14 57.14 0 00-9.973 5.48C9.857 10.31 1.804 18.196.303 30.226L0 30.187C1.515 18.042 9.635 10.088 16.18 5.555A57.43 57.43 0 0126.32 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6185Icon;
/* prettier-ignore-end */
