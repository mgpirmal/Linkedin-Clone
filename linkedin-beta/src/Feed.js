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
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput]= useState("");
    const [posts, setPosts]= useState([]);
    

    useEffect(() => {
        // firebase has some new methods like orderby. This can be used to order posts in asending or decending order
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                
                    id: doc.id,
                    data:doc.data(),
                
            }))
        ))
    },[]);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        // clear textbox after sending post to db
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feedInputContainer">
                <div className="feedInput">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput (e.target.value)} type="text"/>
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
            <FlipMove>
            {posts.map(({id, data: { name, description, message, photoUrl}}) => (
                <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
