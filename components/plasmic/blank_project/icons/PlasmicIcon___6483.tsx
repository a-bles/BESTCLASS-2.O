// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6483IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6483Icon(props: _6483IconProps) {
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
          "M.908.05l.007.007C.862.073.8.073.764.107.666.198.582.305.492.406.34.24.156.224.07.355c.22-.012.48.277.5.57.01.152 0 .304.025.455A.547.547 0 00.627.845C.49.472.49.472.797.196A.904.904 0 00.906.05z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.574 1.474l-.014-.09a2.163 2.163 0 01-.02-.292c0-.054-.004-.11-.007-.164C.515.665.282.39.083.39H.07L0 .394l.038-.06a.218.218 0 01.17-.101h.02c.1.006.193.05.26.124l.054-.06C.604.224.67.153.739.085A.222.222 0 01.857.038L.879.033.903 0l.078.078-.056.017H.922L.903.123A.5.5 0 01.82.23C.53.49.53.49.66.839a.587.587 0 01-.034.564l-.052.07zM.6.883c0 .012.003.026.004.04.004.054.005.111.006.168.001.056.004.113.008.169A.549.549 0 00.6.883zM.147.325a.604.604 0 01.37.313A.257.257 0 01.554.39a.874.874 0 01-.036.04L.49.461.464.431A.341.341 0 00.228.302H.215a.143.143 0 00-.068.023zM.82.115a.085.085 0 00-.034.017C.724.192.667.257.609.325.65.283.702.235.77.175a.341.341 0 00.053-.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6483Icon;
/* prettier-ignore-end */
