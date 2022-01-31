/* eslint-disable no-undef */
import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ( {title, btnColor, showAdd, showState} ) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button showAdd={showAdd} color={btnColor} text={!showState? "Add Task":"Hide"}  onClick={() => console.log("clicked!")} />
        </header>
    )
}

Header.defaultProps = {
    title: "Item tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
