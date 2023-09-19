declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.woff';
declare module '*.woff2';

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
