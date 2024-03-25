import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url = 'https://api.unsplash.com/search/photos'

const Gallery = () => {
  const secretKey = import.meta.env.VITE_ACCESS_KEY
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(
        `${url}?client_id=${secretKey}&query=office`
      )
      return result.data
    },
  })

  console.log(response)
  return <div>Gallery</div>
}

export default Gallery
