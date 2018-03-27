import { 
    SELECT_SUBREDDIT, 
    INVALIDATE_SUBREDDIT, 
    REQUEST_POSTS, 
    RECEIVE_POSTS 
} from './constants'

// Import fetch API in case of browser compatiblity issues
import fetch from 'cross-fetch'

// Action creators for all functionality
// Basically wraps up type and subreddit selected into an object

export const selectSubreddit = (subreddit) => (
    {
        type: SELECT_SUBREDDIT,
        subreddit
    }
)

export const invalidateSubreddit = (subreddit) => (
    {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
)

const requestPosts = (subreddit) => (
    {
        type: REQUEST_POSTS,
        subreddit
    }
)

const recievePosts = (subreddit, json) => (
    {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        recievedAt: Date.now()
    }
)

// Helper function to fetch JSON data from Reddit API
const fetchPosts = (subreddit) => {
    return (dispatch) => {
        // Dispatch requestPosts action just before attempting to fetching data
        dispatch(requestPosts(subreddit))

        // Fetch data and dispatch recievePosts if no errors
        // Catch shouldn't be used to handle errors as 
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(
                response => response.json(),
                error => console.log('An error occured', error)
            )
            .then(
                json => dispatch(recievePosts(subreddit, json))
            )
    }
}

const shouldFetchPosts = (state, subreddit) => {
    // Get posts by subreddit from state
    const posts = state.postsBySubreddit[subreddit]

    // Should fetch posts if no posts exists and not fetching already
    // If posts exists and not fetching then depends on if posts have invalidated
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false        
    } else {
        return posts.didInvalidate
    }
}

export const fetchPostsIfNeeded = (subreddit) => {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit))
        }
    }
}