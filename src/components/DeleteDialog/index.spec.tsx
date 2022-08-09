import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react'
import { ReactNode } from 'react'
import ThemeProvider from 'theme/ThemeProvider'

import DeleteDialog from '.'

describe('DeleteDialog', () => {
  let renderResult: RenderResult
  let open: boolean
  let deleteItem: ReactNode
  let handleDeleteCompleted: jest.Mock
  let closeDeleteDialog: jest.Mock

  beforeEach(() => {
    handleDeleteCompleted = jest.fn()
    closeDeleteDialog = jest.fn()
    open = true
    deleteItem = 'item name'

    renderResult = render(
      <ThemeProvider>
        <DeleteDialog
          open={open}
          DeleteItem={deleteItem}
          handleDeleteCompleted={handleDeleteCompleted}
          closeDeleteDialog={closeDeleteDialog}
        />
      </ThemeProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('handleDeleteCompleted should be called when the form is submitted', async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId('deleteButton'))
    })
    expect(handleDeleteCompleted).toHaveBeenCalledTimes(1)
  })

  it('handleDeleteCompleted should not be called when the cancel button is clicked', async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId('cancel'))
    })
    expect(handleDeleteCompleted).toHaveBeenCalledTimes(0)
  })
})
