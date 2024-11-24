import {MongoClient} from 'mongodb';


 export default async function Connect(){
    const client = await MongoClient.connect('mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
   const db=  client.db();
   const meetupCollection  = db.collection('meetups');

   return {meetupCollection,client};
}
