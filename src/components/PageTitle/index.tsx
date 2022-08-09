import Head from 'next/head'

type Props = {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} - SaaS管理コンソール | SaaSus Platform</title>
    </Head>
  )
}

export default PageTitle
