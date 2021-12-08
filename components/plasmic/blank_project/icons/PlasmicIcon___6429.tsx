// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6429IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6429Icon(props: _6429IconProps) {
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
          "M.073.051L.067.06c.05.016.116.016.15.05C.316.2.4.307.49.408.642.243.826.225.912.357c-.221-.013-.48.277-.5.57-.01.152 0 .304-.026.455A.55.55 0 01.354.847C.492.474.492.474.184.198A.954.954 0 01.073.051z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.407 1.476l-.051-.075A.587.587 0 01.322.838C.45.488.45.488.162.23A.512.512 0 01.076.123L.058.095H.053L0 .078.078 0l.024.033.022.005a.23.23 0 01.118.046c.07.068.135.14.197.214.016.02.035.04.053.059a.384.384 0 01.26-.124h.02a.22.22 0 01.17.102l.039.059L.91.39H.897C.7.39.466.665.448.927c-.003.053-.005.11-.006.164 0 .098-.007.196-.021.293l-.014.092zM.38.885a.54.54 0 00-.018.377 3.22 3.22 0 00.007-.17c.002-.055 0-.111.007-.167A.38.38 0 01.38.885zM.427.392A.254.254 0 01.463.64.605.605 0 01.837.328.143.143 0 00.768.306a.312.312 0 00-.25.128l-.026.03-.027-.03-.04-.04.002-.002zM.16.117c.014.02.03.04.05.057.068.063.122.11.163.154A2.839 2.839 0 00.195.133.092.092 0 00.157.117H.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6429Icon;
/* prettier-ignore-end */
