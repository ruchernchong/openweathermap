import type { GatsbyBrowser } from "gatsby";
import wrapWithProvider from "./wrap-with-provider";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] =
  wrapWithProvider;
