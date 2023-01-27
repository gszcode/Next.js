import Link from 'next/link'
import Layout from '../components/Layout'
import { experiences, projects, skills } from '../profile.js'

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="ryan-ray-profile2.jpeg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-8">
              <h1>Ryan Ray</h1>
              <h5>FullStack Developer</h5>
              <p>
                loremavflmjsdanljfvndswlfvljangvljnergjlvnerñlgvjndslajo
                gjarwsngf lkjnkdsjgrn ihfgr ioneh oñehgois eugh
                loremavflmjsdanljfvndswlfvljangvljnergjlvnerñlgvjndslajo
                gjarwsngf lkjnkdsjgrn ihfgr ioneh oñehgois eugh
              </p>
              <a href="hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second Section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>

            <Link href="/experiences" className="btn btn-light">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link href="#">Know more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link className="btn btn-outline-light" href="portfolio">
              More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index
