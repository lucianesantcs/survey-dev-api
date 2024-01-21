import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const signUpController = new SignUpController()
    const httpRequest = {
      email: 'any_email@mail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }

    const httpResponse = signUpController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
