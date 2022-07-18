import Head from 'next/head'
import { VFC } from 'react'

type Props = {
  title: string
}

const PageTitle: VFC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title} - SaaS管理コンソール | SaaSus Platform</title>
    </Head>
  )
}

export default PageTitle
