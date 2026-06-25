import { useEffect ,useState } from "react";
import axios from "axios";

function Dashbord() {
    const [lists, setLists] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() =>{
        setLists([
            { id: 1,name: "Personal Task"},
            { id: 2,name: "college name"},
        ]);
    },[]);

    const addList = () =>{
        if(title) return;

        const newList ={
            id: Date.now(),
            name; title,
        };

        setLists([... lists, newList]);
        setTitle("");
    );

    const deleteList = (id) => {
        setLists(lists.filter((1)v=> lists.id !== id))
    };

    return (
        <div style={{ display: "flex", height: "100vh"}}>
            {.* SIDEBAR */}
            <div style {{width: "200px",background: "#111",colour: "#fff", padding: "10px"}}></div>
            <h3>Todo Lists</h3>

            {lists.map(list) => {
                <div key={(list.id)} style={{ display: "flex", justifycontent: "space-between",margin: "10px 0"}}>
                    <span>{list.name}</span>
                    <button onClick-{()=>deleteList.id}}>x</button>
                </div>
            ))}

            <input
              placeholder="new list"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        <button onClick={addList}>Add</button>
        </div>

        </div>
        };
    }

    export default Dashbord;
    