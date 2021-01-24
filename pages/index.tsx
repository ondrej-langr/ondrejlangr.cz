import HeadTitle from '../components/HeadTitle'
import PageDescription from '../components/PageDescription'
import PageTitle from '../components/PageTitle'

export default function Home() {
  return <>
    <HeadTitle title={"Hlavní stránka"} />
    <div>
      <PageTitle /> 
      <PageDescription />
    </div>
  </>
}
