import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import View from "../components/view"
import Graph from "../components/graph"
import { isLoggedIn } from "../services/auth"

const Index = () => {
  return (
    <Layout>
      <View title="Graph Page">
        {isLoggedIn() ? (
          <Graph />
        ) : (
          <div>
            <p>
              Using the graphing library, Recharts, a simple graph is rendered
              here.
            </p>
            <p>
              To view the it, kindly
              {` `}
              <Link to="/app/login">login</Link>.
            </p>
          </div>
        )}
      </View>
    </Layout>
  )
}

export default Index
