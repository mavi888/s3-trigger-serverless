'use strict';

module.exports.hello = (event, context, callback) => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  console.log(bucket);
  console.log(key);

  console.log(`A new file ${key} was created in the bucket ${bucket}`);
  callback(null);
};

module.exports.bye = (event, context, callback) => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  console.log(bucket);
  console.log(key);

  console.log(`A new file ${key} was removed in the bucket ${bucket}`);
  callback(null);
};
