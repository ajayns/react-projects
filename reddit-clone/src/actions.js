import { 
    SELECT_SUBREDDIT, 
    INVALIDATE_SUBREDDIT, 
    REQUEST_POSTS, 
    RECEIVE_POSTS 
} from './constants'

import fetch from 'cross-fetch'

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

const fetchPosts = (subreddit) => {
    return (dispatch) => {
        dispatch(requestPosts(subreddit))

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
    const posts = state.postsBySubreddit[subreddit]
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