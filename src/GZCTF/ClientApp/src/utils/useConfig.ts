import { useEffect } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import api, { GlobalConfig } from '@Api'

export const useConfig = () => {
  const {
    data: config,
    error,
    mutate,
  } = api.info.useInfoGetGlobalConfig({
    refreshInterval: 0,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenHidden: false,
    shouldRetryOnError: false,
    refreshWhenOffline: false,
  })

  const [globalConfig, setGlobalConfig] = useLocalStorage({
    key: 'global-config',
    defaultValue: {
      title: '砺剑::实战演练平台',
      slogan: '砺剑::宝剑锋从磨砺出',
    } as GlobalConfig,
  })

  useEffect(() => {
    if (config) {
      setGlobalConfig(config)
    }
  }, [config])

  return { config: config ?? globalConfig, error, mutate }
}
