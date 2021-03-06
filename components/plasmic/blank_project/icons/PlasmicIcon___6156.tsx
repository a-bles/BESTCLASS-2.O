// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6156IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6156Icon(props: _6156IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
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
          "M.058 1.782c.132-.071.268-.138.397-.215.392-.25.851-.372 1.315-.35.09.01.18.029.268.054a2.043 2.043 0 01-.292-.345.54.54 0 01.043-.609.61.61 0 01.612-.22c.056.012.112.027.166.045-.33-.222-1.173-.08-1.65.25A3.33 3.33 0 001.34.317C1.51.254 1.68.2 1.856.16a5.983 5.983 0 00-1.79 1.628l-.008-.006z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.066 1.84L0 1.774l.042-.022.018-.01c.074-.085.146-.17.217-.258.178-.22.37-.43.575-.626.213-.186.438-.356.675-.51l.16-.111c-.057.017-.112.037-.166.056a1.915 1.915 0 01-.472.114 4.204 4.204 0 00-.128.019L.764.452.893.363c.505-.348 1.358-.476 1.69-.25l.176.12-.206-.058-.069-.02a.523.523 0 00-.09-.024.57.57 0 00-.582.21.507.507 0 00-.04.57c.051.086.115.164.189.232l.099.105.067.078-.101-.022-.086-.02a.863.863 0 00-.176-.034 2.2 2.2 0 00-1.296.345 6.103 6.103 0 01-.272.15L.1 1.799l-.014.015-.02.027zM1.818.23c-.082.06-.166.117-.25.175A4.61 4.61 0 00.333 1.529a5.896 5.896 0 01-.105.124c.07-.038.142-.076.21-.117a2.298 2.298 0 011.334-.354.862.862 0 01.161.027l-.018-.017a1.161 1.161 0 01-.201-.25.574.574 0 01.047-.645.663.663 0 01.058-.067zm.286-.16A2.28 2.28 0 001.08.33a1.633 1.633 0 00.419-.105c.114-.044.232-.078.351-.1l.144-.023-.018.013A.569.569 0 012.11.068L2.104.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6156Icon;
/* prettier-ignore-end */
