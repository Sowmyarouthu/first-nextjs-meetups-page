import {MongoClient} from 'mongodb';

export default async function handler(req,res){
if(req.method === 'POST'){
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db=  client.db();
    const meetupCollection  = db.collection('meetups');
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message:'meetup Inserted'});
}
if(req.method === 'GET'){
    console.log("inside get");
    const client = await MongoClient.connect('mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db=  client.db();
    const meetupCollection  = db.collection('meetups');
    const result =  await meetupCollection.find().toArray();
    console.log(result);
    client.close();
    res.status(200).json({message:'Fetched Successfully',data: result});
    return result;
    
}
}
