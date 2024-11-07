import React, { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import './infiniteScroll.css'

function InfiniteScroll(){
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}`);
                const data = await response.json();
                setItems(prevItems => [...prevItems, ...data]);
                setHasMore(data.length !== 0);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop
            !== document.documentElement.offsetHeight
        ) return;
        if (hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll, hasMore]);

    return (
        <div className='infinite-scroll-container'>
            {items.map(item => (
                <div key={item.id}>
                    <Card className='scroll-card'>
                        <Card.Header>
                    <Card.Title>
                  {item.name}
                    </Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <p>{item.body}</p>
                    </Card.Body>
                    </Card>
                </div>
            ))}
            {isLoading && <div className="loading"> <Spinner animation="border" variant="secondary" /></div>}
            {!hasMore && <div className="no-more-items">No more items to show</div>}
        </div>
    );
};

export default InfiniteScroll;
