import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
export default  function newMeetups(){
    const router = useRouter();
    async function  addMeetUpData(meetupdata){
        
    const res = await fetch('/api/newMeetup',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
       
        body: JSON.stringify(meetupdata)
    })

    const data = await res.json();
    console.log(data);
    router.push('/'); 
    }
return (
<>
<Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
    <NewMeetupForm onAddMeetup={addMeetUpData}/>

</>)
}