# Pulumi Minimal Serverless API 

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/binzcodes/pulumi-minimal-dynamodb-api)


A minimal serverless API using AWS API Gateway and Lambda functions serving a dynamic DynamoDB-based hit counter.

Tools:
- Pulumi
- AWS API Gateway
- AWS Lambda
- AWS DynamoDB

# run

Deploy resources:
```bash
pulumi stack select && pulumi up
```

Test the endpoint:
```bash
for i in {1..5}; do curl $(pulumi stack output url); done
```

Clean up resources:
```bash
pulumi destroy
pulumi stack rm
```

# contributing

Contrbutions welcome

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/binzcodes/pulumi-minimal-dynamodb-api)


Based on [pulumi.awsworkshop.com](https://pulumi.awsworkshop.io/additional-content/120_serverless_application_patterns/1_new_project.html)
