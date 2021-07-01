// rollup.config.mjs
import configFactory from "@wcfactory/rollup-umd-build";
import ddselementPackage from "./package.json";

export default configFactory(ddselementPackage.ddselement);
