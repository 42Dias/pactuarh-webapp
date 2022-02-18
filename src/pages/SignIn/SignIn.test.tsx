import { render, screen, userEvent } from 'src/../__helpers__/app-tests'
import { SignIn } from '.'

describe('Sign in screen', () => {
  it('checks if the sign in screen loaded correctly', () => {
    render(<SignIn />)

    expect(screen.getByText(/Login/)).toBeInTheDocument()

    const button = screen.getByText(/Entrar/)

    expect(button).toBeInTheDocument()

    userEvent.click(button)
  })
})
