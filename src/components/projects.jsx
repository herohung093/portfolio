import React from 'react'
import ProjectCard from './projectCard'
const projects = [
  {
    name: 'Dragon Dental Management App',
    description: 'Spring Boot, JavaFx, PostgreSQL',
    imageURL: './thumbnail/DragonDental.PNG',
    imageDetailURL: './detailPhotos/DragonDental.PNG',
    detail:
      'Dragon Dental Server: A Spring boot application using hibernate and PostgreSQL. The app helps Dragon Dental Ltd manage their staff, stock, analyze income, customer and so on. Dragon Dental Client. A “front end” of the Dragon Dental Server used javafx'
  },
  {
    name: 'Corporate Insignts App',
    description:
      'Android, Java, MVVM, RxJava, Dagger 2, LiveData, Retrofit, RestAPI',
    imageURL: './thumbnail/CorporateInsightsApp.png',
    imageDetailURL: './detailPhotos/CorporateInsightsApp.png',
    detail:
      'This project is looking to enable current and prospective investors to make the most of the XBRL data submitted to regulators, as soon as it becomes available on their servers. The application will pull the most current information, and will calculate and visualise several useful and relevant ratios and indicators in a visually easy to grasp way.'
  },
  {
    name: 'Flights Hub App',
    description: 'Android, LiveData, FireBase, Retrofit, MVVM',
    detail:
      'Flights Hub is an android mobile app that help users to look up for flights details, send notification to their phone.',
    imageURL: './thumbnail/FlightsHub.jpg',
    imageDetailURL: './detailPhotos/FlightsHub.jpg'
  },
  {
    name: 'Stay Strong',
    description: 'JavaScript, React JS, HTML, CSS',
    imageURL: './thumbnail/StayStrong.PNG',
    imageDetailURL: './detailPhotos/StayStrong.PNG',
    detail:
      'Stay Strong is an web app to monitor the clients’ daily calorie intake and keep a history of their diet. The app can calculate how much calories in food like pizzas, burgers and so many more meals and drinks. Additonally, it is able to store your intake to you can see your own diet history.'
  }
]
class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <div className="container-fluid " style={{ background: '#f5f5f5ed' }}>
          <h4
            className="inner-top-title color-primary m-0 letter-spacing-1 text-center"
            style={{ padding: '2%', fontSize: '2rem' }}
          >
            Projects
          </h4>
          <div
            className="card-deck"
            style={{
              position: 'relative',
              top: '1em',
              paddingBottom: '5%',
              paddingLeft: '15%'
            }}
          >
            <div className="gallery">
              {projects.map(project => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  detail={project.detail}
                  image={project.imageURL}
                  imageDetail={project.imageDetailURL}
                  description={project.description}
                ></ProjectCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
// }
// const Projects = props => {
  
//   return (
//     <section id="projects">
//       <div className="container-fluid " style={{ background: '#f5f5f5ed' }}>
//         <h4
//           className="inner-top-title color-primary m-0 letter-spacing-1 text-center"
//           style={{ padding: '2%', fontSize: '2rem' }}
//         >
//           Projects
//         </h4>
//         <div
//           className="card-deck"
//           style={{
//             position: 'relative',
//             top: '1em',
//             paddingBottom: '5%',
//             paddingLeft: '15%'
//           }}
//         >
//           <div className="gallery">
//             {projects.map(project => (
//               <ProjectCard
//                 key={project.name}
//                 name={project.name}
//                 detail={project.detail}
//                 image={project.imageURL}
//                 imageDetail={project.imageDetailURL}
//                 description={project.description}
//               ></ProjectCard>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default Projects
