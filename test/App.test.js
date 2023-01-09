import { fireEvent, render, } from "@testing-library/svelte"
import { describe, expect, it, vi } from "vitest"
import App from "../src/App.svelte"

describe('App', () => {

  it.skip('user should be able to search a movie and get results', async () => {
    const { getByRole, findAllByText, findAllByAltText } = render(App)
    // recuperamos el input para la película
    const input = getByRole('textbox')
    // recuperamos el formulario del input
    const form = input.closest('form')

    // escribimos la película que queremos buscar en el input
    await fireEvent.input(input, { target: { value: 'Avengers' } })
    // enviamos el formulario
    await fireEvent.submit(form)

    // buscamos todos los títulos de Avengers por su texto
    const title = await findAllByText(/Avengers/i)
    // recuperamos las imágenes de los resultados por su alt
    const img = await findAllByAltText(/Avengers/i)

    // revisamos que estén definidos
    expect(title[0]).toBeDefined()
    expect(img[0]).toBeDefined()
  })
})