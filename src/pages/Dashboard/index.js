import { useEffect, useState } from "react";

function Home() { 
    const [posts, setPosts] = useState([]) 

    useEffect(() => { 
        async function fetchDanhMuc() {
            const requestURL = '/AppFood/monngaunhien.php'; 
            const response = await fetch(requestURL); 
            const responseJSON = await response.json();   
            const { result } = responseJSON; 
            setPosts(result)
        }
        fetchDanhMuc();
    }, [])
    return (   
        <ul>
            {posts.map((post, index) => ( 
                <div key={index}>
                    <h1>{post.tenmon} - <span>{post.gia}</span> </h1> 
                    <img src={post.hinhmon} alt="" width={200}/> 
                    <p>{post.mota}</p> 
                </div>
            ))}
        </ul>
    );
}

export default Home;