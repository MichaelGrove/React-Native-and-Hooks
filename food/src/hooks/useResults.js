import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    
    const searchApi = async (searchTerm) => {
        try {
            setErrorMessage('')
            const { data } = await yelp.get('/search', {
                params: {
                    limit: 50,
                    location: 'Helsinki',
                    term: searchTerm,
                }
            });
            setResults(data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }
    
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}
