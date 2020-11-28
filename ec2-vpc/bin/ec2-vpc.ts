#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Ec2VpcStack } from '../lib/ec2-vpc-stack';

const app = new cdk.App();
const envCA = { region: "ca-central-1" };
new Ec2VpcStack(app, 'Ec2VpcStack',
		{env:envCA});
