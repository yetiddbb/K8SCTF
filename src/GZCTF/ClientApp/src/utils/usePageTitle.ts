import { useDocumentTitle } from '@mantine/hooks'
import { useConfig } from './useConfig'

export const usePageTitle = (title?: string) => {
  const { config, error } = useConfig()

  const platform = error ? '砺剑::实战演练平台' : `砺剑::实战演练平台`

  useDocumentTitle(
    typeof title === 'string' && title.trim().length > 0 ? `${title} - ${platform}` : platform
  )
}
