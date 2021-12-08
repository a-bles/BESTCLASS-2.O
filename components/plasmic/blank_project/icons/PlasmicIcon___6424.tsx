// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6424IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6424Icon(props: _6424IconProps) {
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
          "M.31.097L.383.39a.896.896 0 01-.206.784l-.095-.006A.766.766 0 00.303.29a1.047 1.047 0 00-.17-.238l.176.044z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.196 1.211h-.02c-.035 0-.065-.004-.095-.006L0 1.197l.059-.053A.728.728 0 00.272.306.51.51 0 00.165.152L.106.078.047 0 .34.07l.006.02.075.294a.942.942 0 01-.214.814l-.01.013zM.228.113c.027.03.052.063.075.098A3.226 3.226 0 00.28.126L.228.113z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6424Icon;
/* prettier-ignore-end */
