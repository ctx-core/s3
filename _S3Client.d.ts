import './env';
import type { S3Configuration } from '@aws-sdk/client-s3-node/S3Configuration';
import { S3Client } from '@aws-sdk/client-s3-node/S3Client';
export declare function _S3Client(config: S3Configuration): S3Client;
