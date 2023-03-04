import { useEffect, useState } from "react";

function Home() { 
    const [posts, setPosts] = useState([]) 

    useEffect(() => { 
        async function fetchDanhMuc() {
            const requestURL = '/AppFood/danhmuc.php'; 
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
                <li key={index}>{post.tendanhmuc}</li>
            ))}
        </ul>
    );
}

export default Home;