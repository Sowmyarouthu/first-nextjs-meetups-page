import { MongoClient,ObjectId} from "mongodb";
import Head from "next/head";
import MeetupDetails from "../../components/meetups/MeetupDetails";
export default function meetupDetails(props){
    
    
    return (<>
   <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    
    </>)
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db=  client.db();
    const meetupsCollection  = db.collection('meetups');
  
    const meetups = await meetupsCollection.find().toArray();
  
    client.close();
  
    return {
      fallback: false,
      paths: meetups.map((meetup) => ({
        params: { meetupDetails: meetup._id.toString() }
      })),
    };
  }
  
  export async function getStaticProps(context) {
    // fetch data for a single meetup
  
    const meetupId = context.params.meetupDetails;
   
    const client = await MongoClient.connect('mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db=  client.db();
    const meetupsCollection  = db.collection('meetups');
    // const meetups =  await meetupsCollection.find().toArray();
    
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
      });
    
    client.close();
  
    return {
      props: {
        meetupData: {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description,
        },
      },
    };
  }
  