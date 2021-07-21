import React, {useState , useEffect} from 'react'
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import Post from './Post';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from './firebase';


function Feed() {

    const [posts, setPosts]= useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                
                    id: doc.id,
                    data:doc.data(),
                
            }))
        ))
    },[]);

    const sendPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Matthew Pirmal",
            description: "This is a Test",
            message: "Message Here"
        })
    };

    return (
        <div className="feed">
            <div className="feedInputContainer">
                <div className="feedInput">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feedInputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#7085F9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#b32d2d" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#a8329e" />
                    <InputOption title="Article" Icon={CalendarViewDayIcon} color="#2db336" />                  
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
                <Post />
            ))}
            <Post name="Matthew Pirmal" description="This is a Test" message="Working Message"/>
        </div>
    )
}

export default Feed
