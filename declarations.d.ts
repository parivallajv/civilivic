declare module "*.jpg" {
  const value: import("next/image").StaticImageData;
  export default value;
}
