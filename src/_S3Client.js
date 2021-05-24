import './env';
import { S3Client } from '@aws-sdk/client-s3';
export function _S3Client(config) {
    return new S3Client(config);
}
