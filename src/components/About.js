// to avoid reloading another page, I will
// import a link from react-router-dom
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <h4>The Final Porject of CS50x</h4>
            <p>I'm Amjad Oudeh and I made this Porject
                using React.js with Hooks for the UI and JSON
                server for the Backend
            </p>
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default About
