import * as awsx from "@pulumi/awsx";
import { logHitsEventHandler } from "./handlers";

const site = new awsx.apigateway.API("site", {
  routes: [
    {
      path: "/",
      method: "GET",
      eventHandler: logHitsEventHandler,
    },
  ],
});

export const url = site.url;
