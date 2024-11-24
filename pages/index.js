
import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';
import Head from 'next/head';
export default  function HomePage(props) {

    return (<>
<Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
        <MeetupList meetups={props.meetups} />
    </>)
}


export  async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db=  client.db();
    const meetupCollection  = db.collection('meetups');
    const meetups =  await meetupCollection.find().toArray();
    
    return {
        props: {
            meetups: meetups.map((meetup) => ({
              title: meetup.title,
              address: meetup.address,
              image: meetup.image,
              id: meetup._id.toString(),
            })),
          },
          revalidate: 1,
        };     
}

