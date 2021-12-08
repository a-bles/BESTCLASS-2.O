// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6512IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6512Icon(props: _6512IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
          "M.513 1.138C.76.587.644.363 0 .124.127.081.279-.03.374.008A.684.684 0 01.772.35c.059.289.085.583.079.877.02.363-.3.427-.504.59l-.102-.033.117-.423.151-.223z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6512Icon;
/* prettier-ignore-end */
