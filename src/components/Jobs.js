import React from 'react'
import Title from './Title'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {graphql, useStaticQuery} from 'gatsby'
import {MoreBtn} from '../constants/buttons'
import {Link} from 'gatsby'

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

 const Jobs = () => {
     const data = useStaticQuery(query)
     const {allStrapiJobs: {nodes:jobs}} = data
     const [value, setValue] = React.useState(0)
     const {company, date, position, desc} = jobs[value]
    return (
        <section className="section jobs">
            <Title title="experiencia"/>
            <div className="jobs-center">
                {/*btn container*/}
                <div className="btn-container">
                    {jobs.map( (item,index)=>{
                        return(
                            <button 
                                key={item.strapiId}
                                onClick={ () => setValue(index)}
                                className={`job-btn ${index === value && "active-btn"}`}>
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                {/*Job info */}
                <article className="job-info">
                    <h3>{position}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{date}</p>
                    {desc.map( (item)=> {
                        return(
                            <div key={item.id} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </article> 
            </div>
                <MoreBtn title="Más info" link="/acerca"/>
        </section>
    )
}

export default Jobs