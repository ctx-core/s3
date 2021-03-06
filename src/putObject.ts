import {
	PutObjectCommand, PutObjectCommandInput, PutObjectOutput, S3Client
} from '@aws-sdk/client-s3'
/**
 * S3 putObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property}
 */
export function putObject(s3client: S3Client, opts: PutObjectCommandInput): Promise<PutObjectOutput> {
	return s3client.send(new PutObjectCommand(opts))
}
