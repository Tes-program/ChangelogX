/* eslint-disable @typescript-eslint/no-var-requires */
import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "local";

let envConfig: any;

if (stage === "production") {
  envConfig = require("./production").default;
} else {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  envConfig = require("./development").default;
}

export default merge(
  {
    stage,
    env: process.env.NODE_ENV,
    port: 3001,
    secrets: {
      jwt: process.env.JWT_SECRET,
      dburl: process.env.DATABASE_URL,
      shadowurl: process.env.SHADOW_DATABASE,
    },
  },
  envConfig,
);
