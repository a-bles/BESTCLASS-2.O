// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6157IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6157Icon(props: _6157IconProps) {
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
          "M.89.049l.007.007C.844.07.782.07.748.104.653.195.571.3.482.4.334.235.152.22.069.347c.216-.012.47.271.49.558.01.148 0 .297.024.445A.536.536 0 00.615.828C.479.462.479.462.78.193A.885.885 0 00.89.049z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.562 1.442l-.014-.087a2.117 2.117 0 01-.02-.287c0-.052-.003-.107-.006-.16C.504.651.276.381.08.381H.069L0 .385.038.327a.213.213 0 01.166-.1h.018c.098.007.19.05.256.122L.53.291A2.69 2.69 0 01.723.083.218.218 0 01.84.037L.86.032.884 0 .96.076.906.093H.902L.884.12a.489.489 0 01-.081.104C.519.48.519.48.646.821a.574.574 0 01-.033.552l-.051.07zM.587.864c0 .012.003.026.004.04.004.052.005.108.006.163.001.056.004.111.008.166a.537.537 0 00-.017-.37H.587zM.144.318a.59.59 0 01.363.306A.252.252 0 01.54.383a.856.856 0 01-.035.039L.48.452.454.421A.334.334 0 00.223.296H.21a.14.14 0 00-.066.022zm.66-.206A.083.083 0 00.77.13a2.736 2.736 0 00-.174.189C.636.278.687.23.753.171A.334.334 0 00.805.112H.804z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6157Icon;
/* prettier-ignore-end */
