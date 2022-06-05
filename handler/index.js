const AWS = require("aws-sdk");

exports.handler = async function (event, context, callback) {
  console.log("Received event: ", event);
  const dc = new AWS.DynamoDB.DocumentClient();
  const result = await dc
    .update({
      TableName: process.env["HITS_TABLE"],
      Key: {Site: "ACMECorp"},
      UpdateExpression: "SET Hits = if_not_exists(Hits, :zero) + :incr",
      ExpressionAttributeValues: {":zero": 0, ":incr": 1},
      ReturnValues: "UPDATED_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    headers: {"Content-Type": "text/html"},
    body:
      "<h1>Welcome to ACMECorp!</h1>\n" +
      `<p>${result.Attributes.Hits} hits.</p>\n`,
  };
};
