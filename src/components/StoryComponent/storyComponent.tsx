
export const StoryComponent = (props: any) => { 
    return (
        <div>{props.story.title}, score: {props.story.score}</div>
    );
};