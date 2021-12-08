// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6106IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6106Icon(props: _6106IconProps) {
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
          "M.186.031a.651.651 0 00-.131.583c.014.087.037.172.069.253A1.033 1.033 0 01.106.422C.158.227.158.042.315.034"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.094.882A1.211 1.211 0 01.023.621.675.675 0 01.161.008l.042.036A.164.164 0 01.315 0l.003.069C.223.074.201.16.168.317L.144.431a.982.982 0 00.015.428L.094.882zM.121.203a.592.592 0 00-.058.264.926.926 0 01.011-.055L.1.302A.928.928 0 01.122.203z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6106Icon;
/* prettier-ignore-end */
