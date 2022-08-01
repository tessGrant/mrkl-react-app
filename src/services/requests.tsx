import axios from "axios";
import {Author, Story, StoryObject} from '../utils/types';

const BaseURL = 'https://hacker-news.firebaseio.com/v0';

export const getStoryByID = async (id: any): Promise<Story> => new Promise((resolve, reject) => {
    axios
        .get(`${BaseURL}/item/${id}.json`)
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(error);
        });
});

export const getStories = async () => {
    try {
        const { data: storyIds  } = await axios.get(
            `${BaseURL}/topstories.json`
            );
        const stories = await Promise.all(storyIds.slice(0, 10).map((storyId: any) => getStoryByID(storyId)));
        return stories;
    } catch (error) {
      console.log('Error while getting list of stories.');
    }
  };

export const getAuthorByStoryID = async(id: number): Promise<Author> => new Promise((resolve, reject) => {
    axios
        .get(`${BaseURL}/user/${id}.json`)
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(error);
        });
});

export const getAuthors = async () => {
    try {
        const stories: any = await getStories();
        const authors = await Promise.all(stories.map((story: any) => getAuthorByStoryID(story.by)));
        return authors;
    } catch (err) {
        console.log(err)
    }
}