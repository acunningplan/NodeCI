const query = Person.find({ occupation: /host/ })
  .where("name.last")
  .equals("Ghost")
  .where("age")
  .gt(17)
  .lt(66)
  .where("likes")
  .in(["vaporizing", "talking"])
  .limit(10)
  .sort("-occupation")
  .select("name occupation")
  .exec(callback);

// Check to see if the query has already been fetched
query.exec = function() {
  const result = client.get("query key");

  if (result) {
    return result;
  }

  const result = runTheOriginalExecFunction();

  client.set("query key", result);

  return result;
};

query.then(result => {
  console.log(result);
});

const result = await query;
