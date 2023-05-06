//Exercise SWR - Modify the `useGithubUser`
/*
import useGithubUser from './useGithubUser'

function App() {
  const { user, isLoading, isError } = useGithubUser('codingbyarshya')

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {isError.message}</div>
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt="Profile" />
    </div>
  )
}

export default App
*/
//=====================================================================================================================================
// Exercise SWR - Modify the `useGithubUser` part2
/*
import useGithubUser from './useGithubUser'

function App() {
  const { user, isLoading, isError } = useGithubUser(null)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {isError.message}</div>
  }

  if (!user) {
    return <div>No user selected</div>
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt="Profile" />
    </div>
  )
}

export default App
*/
//=====================================================================================================================================
// Exercise SWR - Modify the `useGithubUser` part3
/*
import { useState } from 'react'
import useGithubUser from './useGithubUser'

function App() {
  const [username, setUsername] = useState('codingbyarshya')
  const { user, isLoading, isError, refetch } = useGithubUser(username)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleRefetchClick = () => {
    refetch()
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {isError.message}</div>
  }

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        <button onClick={handleRefetchClick}>Refetch</button>
      </div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt="Profile" />
    </div>
  )
}

export default App
*/
