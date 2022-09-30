import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { getVariables, Documentation } from '../utils/doc-utils'
import Docs from '../components/Docs'

export interface VariablesProps {
  variables: Documentation
}

export default function Variables(props: VariablesProps) {
  return (
    <Layout>
      <SEO
        title="Conky – Variables"
        description="Conky object variables documentation"
      />
      <main className="w-full">
        <div>
          <h1 className="text-2xl">Variables</h1>
        </div>
        <Docs docs={props.variables} braces={true} assign={false} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = getVariables()

  return { props: { variables } }
}