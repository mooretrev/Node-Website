const data = [
    {
        "_id": "Bench",
        "maxes":{
          "1": 315,
          "7": 245,
          "12": 225,
          "100": 135
        }
        
    },
    {
        "_id": "Squat",
        "maxes": {
          "1": 405,
          "2": 365,
          "3": 365,
          "4": 365,
          "5": 355,
          "6": 315,
          "8": 315
        }
       
    },
    {
        "_id": "Deadlift",
        "maxes":{
          "1": 425,
          "2": 405,
          "3": 405,
          "5": 365,
          "6": 365,
          "8": 315
        }
        
    }
]
const mongoDbPassword = process.env.MONGO_DB_PASSWORD
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://Personal-Website:${mongoDbPassword}@cluster0.e4wxl.mongodb.net/dev?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

async function run() {
    try {
      await client.connect();
  
      const database = client.db("dev");
      const collection = database.collection("maxes");
      // create a document to be inserted
      const deleteRes = await collection.deleteMany();
      const result = await collection.insertMany(data); 
  
      console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
      );
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
