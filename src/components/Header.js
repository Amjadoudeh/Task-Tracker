import PropTypes from 'prop-types'
import Button from './Button'
// since we don't use the add button in About section
// I will import uselocation to disable it 
import {useLocation} from 'react-router-dom'

// just to make it as reusable as we can
const Header = ({title , onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
        <h1>{ title }</h1> 
        {/* don't show the button if the location is '/'  */}
        {location.pathname ==='/' && (
        <Button color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
        </header>
    )
}

// seting the defaultprop for the title
Header.defaultProps = {
    title: 'Task Tracker',
}

// limiting the title with string type
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
