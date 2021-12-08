// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6090IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6090Icon(props: _6090IconProps) {
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
          "M.072.05L.066.058c.05.015.113.015.147.048C.31.197.391.302.48.401.63.237.81.221.893.35.677.337.423.62.404.907c-.01.148 0 .297-.026.445A.538.538 0 01.348.83C.481.464.481.464.18.195A.934.934 0 01.07.05z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.398 1.444l-.05-.073a.574.574 0 01-.033-.55C.44.476.44.476.158.224A.501.501 0 01.074.121L.056.093H.052L0 .076.076 0 .1.032l.022.005a.22.22 0 01.115.046C.305.149.37.218.43.29c.016.02.035.04.052.058a.375.375 0 01.254-.12h.02a.215.215 0 01.166.1L.96.384.89.381H.88c-.195 0-.423.27-.44.526-.004.052-.005.108-.007.16 0 .097-.007.193-.02.288l-.014.09zM.373.866a.528.528 0 00-.017.369c.003-.055.005-.111.006-.166.002-.054 0-.11.007-.163 0-.014.002-.027.004-.04zM.418.384a.249.249 0 01.035.243A.592.592 0 01.82.32.14.14 0 00.752.299a.305.305 0 00-.244.126L.48.455.455.424l-.04-.04.003-.001zM.157.114c.014.02.03.04.048.057.067.06.12.108.16.15A2.778 2.778 0 00.191.13.09.09 0 00.154.114h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6090Icon;
/* prettier-ignore-end */
