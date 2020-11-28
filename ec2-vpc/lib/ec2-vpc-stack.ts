import * as cdk from "@aws-cdk/core";
import vpc = require("@aws-cdk/aws-ec2");

export class Ec2VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ec2vpc = new vpc.Vpc(this, "ec2vpc", {
      maxAzs: 3,
      natGateways: 1,
      subnetConfiguration: [
        {
          name: "Public",
          subnetType: vpc.SubnetType.PUBLIC,
        },
        {
          name: "Private",
          subnetType: vpc.SubnetType.PRIVATE,
        },
      ],
    });

const vpcidoutput = new cdk.CfnOutput(this,"vpcidoutput",{
    	value:ec2vpc.vpcId,
	description:"VPC ID"
    }
 )

const publicselection =  ec2vpc.selectSubnets({
  subnetType: vpc.SubnetType.PUBLIC
});

const privateselection = ec2vpc.selectSubnets({
  subnetType: vpc.SubnetType.PRIVATE
});
 
 const publicsubnets = new cdk.CfnOutput(this,"publicsubnets",{
 	value: publicselection.subnetIds.toString(),
	description:"Public Subnets"
 })

 const privatesubnets = new cdk.CfnOutput(this,"privatesubnets",{
 	value:privateselection.subnetIds.toString(),
	description:"Private Subnets"
 })

  }
}
