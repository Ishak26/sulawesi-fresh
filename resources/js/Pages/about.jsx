import Index from './index'

function About() {
  return <h1>Halaman About</h1>
}

About.layout = (page) => <Index children={page} />

export default About
