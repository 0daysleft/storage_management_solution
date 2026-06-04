const sdk = require("node-appwrite");

const client = new sdk.Client()
  .setEndpoint("https://sfo.cloud.appwrite.io/v1")
  .setProject("69c6c1ec000cadc538d8")
  .setKey(
    "standard_29c4ab93d6b7d406a3681fffb493509c84b363a2687fa6900b56490ee9b1dc0b2c8ca6b859cf34141fa759c2cb2d7be0326d9d69c669f5ba5847a4498e3416b79a51ada21d268c5444d32af1cca4cafcc8f753ba1a13c170eea98486e5ac290697dba0a1e18f5c435df695dc62c5eeebb26a4b26099f8867390f4678ec9f2e69",
  );

const databases = new sdk.Databases(client);
const storage = new sdk.Storage(client);

(async () => {
  try {
    const DATABASE_ID = "69c6cb57003a33253c01"; // 👈 your existing DB

    // Create Users Collection
    const usersCollection = await databases.createCollection(
      DATABASE_ID,
      "unique()",
      "users",
    );

    console.log("Users collection:", usersCollection.$id);

    // Create Files Collection
    const filesCollection = await databases.createCollection(
      DATABASE_ID,
      "unique()",
      "files",
    );

    console.log("Files collection:", filesCollection.$id);

    // Create Bucket
    const bucket = "69c6cc48001356cd2373";

    console.log("Bucket created:", bucket);
  } catch (error) {
    console.error(error);
  }
})();
