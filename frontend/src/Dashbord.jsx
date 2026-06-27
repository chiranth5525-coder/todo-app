import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [lists, setLists] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        setLists([
            { id: 1, name: "Personal Task" },
            { id: 2, name: "College Task" },
        ]);
    }, []);

    const addList = () => {
        if (!title) return;

        const newList = {
            id: Date.now(),
            name: title,
        };

        setLists([...lists, newList]);
        setTitle("");
    };

    const deleteList = (id) => {
        setLists(lists.filter((list) => list.id !== id));
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* SIDEBAR */}
            <div
                style={{
                    width: "200px",
                    background: "#111",
                    color: "#fff",
                    padding: "10px",
                }}
            >
                <h3>Todo Lists</h3>

                {lists.map((list) => (
                    <div
                        key={list.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 0",
                        }}
                    >
                        <span>{list.name}</span>
                        <button onClick={() => deleteList(list.id)}>X</button>
                    </div>
                ))}

                <input
                    placeholder="New List"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={addList}>Add</button>
            </div>
        </div>
    );
}

export default Dashboard;