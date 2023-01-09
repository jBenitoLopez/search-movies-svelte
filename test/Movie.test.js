import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/svelte'
import Movie from "../src/lib/Movie.svelte"

describe('Movie', () => {
  it('should be defined', () => {
    expect(Movie).toBeDefined()
  })

  it('should render correctly and img ok', () => {
    const imgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg'
    const { getByAltText } = render(Movie, {
      props: {
        title: 'The Matrix',
        year: '1999',
        poster: imgUrl
      }
    })
    const img = getByAltText('The Matrix')
    expect(img.getAttribute('src')).toBe(imgUrl)
  })

  it('should render correctly and title ok', () => {
    const imgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg'
    const { getByRole } = render(Movie, {
      props: {
        title: 'The Matrix',
        year: '1999',
        poster: imgUrl
      }
    })
    const h1 = getByRole('heading', { level: 3 })
    expect(h1.innerHTML).toBe('The Matrix (1999)')
  })

})
