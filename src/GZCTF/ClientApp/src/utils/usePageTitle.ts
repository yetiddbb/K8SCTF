import { useDocumentTitle } from '@mantine/hooks'
import { useConfig } from './useConfig'

export const usePageTitle = (title?: string) => {
  const { config, error } = useConfig()

  const platform = error ? '砺剑::实战演练平台' : `${config?.title ?? 'GZ'}::CTF`

  useDocumentTitle(
    typeof title === 'string' && title.trim().length > 0 ? `${title} - ${platform}` : platform
  )
}
