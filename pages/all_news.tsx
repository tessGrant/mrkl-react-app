import type { NextPage } from 'next'
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getAuthors, getStories } from "../src/services/requests";
import { useQuery } from "react-query"
import { StoryComponent } from '../src/components/StoryComponent/storyComponent';
import { AuthorInfoComponent } from '../src/components/AuthorInfo/authorInfo';

const  AllNewsComponent: NextPage = () => {
    const {data, isLoading} = useQuery(["topStories"], () => getStories());
    const authors = useQuery(["authors"], () => getAuthors());
    const [sorted, setSorted] = useState(data);

    const sortByScoreAsc = useCallback((data: any) => {
        const newSorted = data?.slice().sort((a: any, b: any) => a.score - b.score);
        setSorted(newSorted);
    }, []);
    
    useEffect(()=>{
       sortByScoreAsc(data);
    },[sortByScoreAsc, data])

    if(isLoading) {return <div>Loading data...</div>}
    return (
        <div>
            All News Works
            <div>
                {sorted?.map((item: any, index: any) => 
                <div key={index}>
                    <StoryComponent story={item} />
                    {authors.data?.map((user, index) => {
                        if(user.id === item.by){return <AuthorInfoComponent key={index} user={user} />}
                    })}
                </div>)}
            </div>
        </div>
    );
};

export default AllNewsComponent;