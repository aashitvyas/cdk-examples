# Welcome to ec2-vpc CDK TypeScript project!

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


## Description

1. This project is going to deploy a VPC with default cidr range 10.0.0.0/16 with Public and Private subnet evenly divided to maximum of 3 AZs in a targeted region
2. It will going to output **vpcid** and **subnetids** of both public & private subnet
3. Default this will going to deploy VPC into `ca-central-1` region
4. Update the cdk.json file with `region` property to change the desired region of your deployment or pass in the `region` context parameter while running cdk commands (e.g `cdk deploy -c region=us-west-2`)
