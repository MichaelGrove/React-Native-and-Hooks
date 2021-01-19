import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, { type, payload }) => {
    switch (type) {
        case 'GET_BLOGPOSTS':
            return payload
        case 'EDIT_BLOGPOST':
            return state.map(blogPost => 
                blogPost.id === payload.id ? payload : blogPost)
        case 'DELETE_BLOGPOST':
            return state.filter(blog => blog.id != payload)
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        if (callback) {
            callback();
        }
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content})
        dispatch({ type: 'EDIT_BLOGPOST', payload: { id, title, content } })
        if (callback) callback();
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const { data } = await jsonServer.get('/blogposts');
        dispatch({ type: 'GET_BLOGPOSTS', payload: data })
    }
}

const deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'DELETE_BLOGPOST', payload: id });
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    [
        { title: 'TEST POST', content: 'TEST CONTENT', id: 1 }
    ]
);
