import React from 'react'
import SkillBar from './skillBar'

const skills = [
  { name: 'Java', level: 87 },
  { name: 'Spring Boot', level: 75 },
  { name: 'React JS', level: 75 },
  { name: 'HTML & CSS', level: 71 },
  { name: 'Adnroid', level: 80 },
  { name: 'Agile', level: 90 }
]
class SkillSet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="section-title text-center m-auto pb-30">
              <section id="skillSet" className="bg-lightgray py-80">
                <h4
                  className="inner-top-title color-primary m-0 letter-spacing-1"
                  style={{ fontSize: '2rem' }}
                >
                  Skill Set
                </h4>
                <div className="container ">
                  {skills.map(item => (
                    <SkillBar
                      key={item.name}
                      level={item.level}
                      skill={item.name}
                    ></SkillBar>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillSet
