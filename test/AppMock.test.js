import { fireEvent, render, } from "@testing-library/svelte"
import { describe, expect, it, vi } from "vitest"
import App from "../src/App.svelte"
import { RESPONSE_WITH_AVENGERS_MOVIES } from '../__mocks__/api-omdb.js'

describe('App', () => {

  it('user should be able to search a movie and get results', async () => {
    const { getByRole, findAllByText, findAllByAltText } = render(App)

    // mockeamos las llamadas al método fetch
    // de forma que devolvemos siempre la respuesta mockeada
    global.fetch = vi.fn().mockImplementationOnce(
      () =>
        Promise.resolve(
          {
            ok: true, // necesitamos que la respuesta sea correcta
            json: () => Promise.resolve(RESPONSE_WITH_AVENGERS_MOVIES)
          }
        )
    )

    const input = getByRole('textbox')
    const form = input.closest('form')

    await fireEvent.input(input, { target: { value: 'Avengers' } })
    await fireEvent.submit(form)

    const title = await findAllByText(/Avengers/i)
    const img = await findAllByAltText(/Avengers/i)

    expect(title[0]).toBeDefined()
    expect(img[0]).toBeDefined()

  })
})