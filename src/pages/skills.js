import React from "react"
import Layout from '../components/layout'
import {useStaticQuery, graphql} from 'gatsby'

const Skill = (props) => {
  return (
        <table className="item-table skill-table">
        <tbody>
          <tr>
            <td className="item-name">{props.name || ""}</td>
            <td className="item-when">{props.experience || ""}&nbsp;</td>
          </tr>
          <tr>
            <td className="" colSpan={2}>
              <div className="skill-meter-wrapper">
                  <div className="skill-meter" style={{width: props.level+"%"}}></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="item-more-info" colSpan={2} dangerouslySetInnerHTML={{__html: props.moreInfo}} />
          </tr>
        </tbody>
      </table>
  )
}

export default (props) => {
  const data = useStaticQuery(graphql`
          query  {
            site {
              siteMetadata {
                  skills {name, level, experience, moreInfo}
              }
            }
          }
        `)
  const skills = data.site.siteMetadata.skills.map((item, index)=> <Skill key={index} name={item.name} level={item.level} experience={item.experience} moreInfo={item.moreInfo} />)
  return (
    <Layout pageTitle="Skills at a glance" pageDescription="Learn more about my skills">
        {skills}
    </Layout>
    )
}
