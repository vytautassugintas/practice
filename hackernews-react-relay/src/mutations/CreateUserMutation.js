import {
  commitMutation,
  graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateUserMutation($createUserInput: SignupUserInput!) {
    createUser(input: $createUserInput) {
      user {
        id
      }
    }
  }
`

export default (name, email, password, callback) => {
  const variables = {
    // 1 
    createUserInput: {
      name: name,
      clientMutationId: ""
    },
  }

  // 3
  commitMutation(
    environment,
    {
      mutation,
      variables,
      // 4
      onCompleted: (response) => {
        console.log(response);
        const id = response.createUser.user.id
        const token = 'best-token'//response.signinUser.token
        callback(id, token)
      },
      onError: err => console.error(err),
    },
  )
}