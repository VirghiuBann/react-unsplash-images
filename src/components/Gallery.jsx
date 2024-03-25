import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from '../context'

const url = 'https://api.unsplash.com/search/photos'

const Gallery = () => {
  const { searchQuery } = useGlobalContext()
  const secretKey = import.meta.env.VITE_ACCESS_KEY
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(
        `${url}?client_id=${secretKey}&query=${searchQuery}`
      )
      return result.data
    },
  })

  if (response.isLoading)
    return (
      <div className='image-container'>
        <h4>Loading...</h4>
      </div>
    )

  if (response.isError)
    return (
      <div className='image-container'>
        <h4>There was an error...</h4>
      </div>
    )

  const result = response.data.results
  if (result.length < 1)
    return (
      <div className='image-container'>
        <h4>No images found...</h4>
      </div>
    )

  return (
    <div className='image-container'>
      {result.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className='img'
          />
        )
      })}
    </div>
  )
}

export default Gallery
