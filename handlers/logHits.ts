import * as AWS from "aws-sdk";

import { hits } from "../tables";

export const logHitsEventHandler = async () => {
  const dc = new AWS.DynamoDB.DocumentClient();
  const result = await dc
    .update({
      TableName: hits.name.get(),
      Key: {Site: "ACMECorp"},
      UpdateExpression: "SET Hits = if_not_exists(Hits, :zero) + :incr",
      ExpressionAttributeValues: {":zero": 0, ":incr": 1},
      ReturnValues: "UPDATED_NEW",
    })
    .promise();
  return {
    statusCode: 200,
    headers: {"Content-Type": "text/json"},
    body: JSON.stringify({
      messgae: "Welcome to ACMECorp!",
      hits: result.Attributes!.Hits,
    }),
  };
};
