// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6173IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6173Icon(props: _6173IconProps) {
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
          "M.13.03a.65.65 0 01.13.584 1.283 1.283 0 01-.067.253C.23.722.237.57.21.422.16.227.158.042 0 .034"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.224.882L.159.859C.195.719.201.573.176.43.166.392.159.354.15.317.117.16.094.074 0 .069V0a.17.17 0 01.113.044L.155.008a.684.684 0 01.137.62 1.206 1.206 0 01-.068.254zM.197.206l.022.097c.008.033.014.073.025.11a.543.543 0 01.01.053.568.568 0 00-.057-.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6173Icon;
/* prettier-ignore-end */
