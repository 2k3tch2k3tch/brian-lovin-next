import * as React from 'react'
import { useRouter } from 'next/router'
import { useLoginMutation } from '~/graphql/types.generated'
import { withApollo } from '~/components/withApollo'
import { FullscreenContainer, FullscreenContent } from '~/components/Page/style'
import Input from '~/components/Input'

function Login() {
  const router = useRouter()
  const [password, setPassword] = React.useState('')

  const [handleLogin] = useLoginMutation({
    variables: { password },
    onCompleted: (data) => data.login && router.push('/bookmarks'),
  })

  function onSubmit(e) {
    e.preventDefault()
    handleLogin()
  }

  return (
    <FullscreenContainer>
      <FullscreenContent>
        <form
          style={{
            background: 'var(--bg-inset)',
            borderRadius: '12px',
            padding: '32px',
          }}
          onSubmit={onSubmit}
        >
          <Input
            autoFocus
            type="password"
            placeholder="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </FullscreenContent>
    </FullscreenContainer>
  )
}

/*
  withApollo is needed to automatically wrap this page in an ApolloProvider,
  allowing for the use of mutationHooks on the client.
*/
export default withApollo(Login)
