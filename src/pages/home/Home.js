import { projectFirestore } from '../../firebase/config';
import RecipeList from '../../components/RecipeList'

// styles
import './Home.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {


    const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {

      const recipes = []

      if (snapshot.empty) {
        setError('No recipes found')
        setIsPending(false)
      } else {
        snapshot.forEach(doc => {
          recipes.push({ ...doc.data(), id: doc.id })
        })
        setData(recipes)
        setIsPending(false)
      }
    }, err => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()

  }, [])



  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
