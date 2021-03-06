import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BreadCrumb from '../BreadCrumb'
import Controls from '../Controls'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import Loader from 'react-loader-spinner'

import './index.scss'

const Layout = ({
    title,
    children,
    customPrev,
    customNext,
    prevButtonType,
    nextButtonType,
    prevButtonText,
    nextButtonText,
}) => {
    const { isLoading } = useSelector(({ app }) => app)

    return (
        <>
            <Helmet title={title} htmlAttributes={{ lang: 'es' }} />
            <header className="container__header">
                <BreadCrumb classes="header__breadcrumb" />
                <aside className="header__title">
                    <h1 data-testid="header__title">{title}</h1>
                </aside>
            </header>
            <main className="container__body">
                {isLoading ? (
                    <Loader type="ThreeDots" className="loader" />
                ) : (
                    children
                )}
            </main>
            <footer className="container__footer">
                <Controls
                    prevButtonText={prevButtonText}
                    nextButtonText={nextButtonText}
                    prevButtonType={prevButtonType}
                    nextButtonType={nextButtonType}
                    customNext={customNext}
                    customPrev={customPrev}
                />
            </footer>
        </>
    )
}

Layout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
    customNext: PropTypes.func,
    customPrev: PropTypes.func,
    prevButtonText: PropTypes.string,
    nextButtonText: PropTypes.string,
    prevButtonType: PropTypes.string,
    nextButtonType: PropTypes.string,
}

export default Layout
