import React from "react"
import Layout from '../components/layout'
import Item from '../components/item'
import {useStaticQuery, graphql} from 'gatsby'

export default (props) => {
  const data = useStaticQuery(graphql`
          query  {
            site {
              siteMetadata {
                interests {name, moreInfo}
              }
            }
          }
        `)
  //const interests = data.site.siteMetadata.interests.map((item, index)=><li key={index}>{item}</li>)
  const interests = data.site.siteMetadata.interests.map((item, index)=>(
    <Item
        key={index}
        name={item.name}
        moreInfo={item.moreInfo} />
  ))
  return (
    <Layout pageTitle="Non-professional Interests" pageDescription="Learn more about my interests and hoppies">
        <ul>
            {interests}
        </ul>
    </Layout>
    )
}


