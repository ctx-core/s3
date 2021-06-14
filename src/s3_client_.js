import './env';
import { S3Client } from '@aws-sdk/client-s3';
export function S3Client_(config) {
    return new S3Client(config);
}
export { S3Client_ as _S3Client, };
//# sourceMappingURL=src/s3_client_.js.map