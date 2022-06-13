# Pulumi minimal serverless api

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/gitpod-io/workspace-images)


A minimal serverless API using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

Tools:
- Pulumi
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB

# run

Deploy resources:
```
pulumi up
```

Test the endpoint:
```
for i in {1..5}; do curl $(pulumi stack output url); done
```

Clean up resources:
```
pulumi destroy
pulumi stack rm
```

# contributing

All contrbutions welcome

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/workspace-images)


Based on: [awsworkshop.com](https://pulumi.awsworkshop.io/additional-content/120_serverless_application_patterns/1_new_project.html)
