import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const signUpController = new SignUpController()
    const httpRequest = {
      body: {
        name: undefined,
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = signUpController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})

describe('SignUp Controller', () => {
  test('should return 400 if no email is provided', () => {
    const signUpController = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: undefined,
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = signUpController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
