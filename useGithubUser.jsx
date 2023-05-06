//Exercise SWR - Modify the `useGithubUser`
/*
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useGithubUser(username) {
  const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
*/
//=====================================================================================================================================
// Exercise SWR - Modify the `useGithubUser` Part2
/*
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useGithubUser(username) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  )

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
*/
//=====================================================================================================================================
// Exercise SWR - Modify the `useGithubUser` Part3
/*
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  )

  const refetch = () => {
    mutate()
  }

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    refetch,
  }
}
*/