import * as aws from "@pulumi/aws";

export const hits = new aws.dynamodb.Table("hits", {
  attributes: [{name: "Site", type: "S"}],
  hashKey: "Site",
  billingMode: "PAY_PER_REQUEST",
});
