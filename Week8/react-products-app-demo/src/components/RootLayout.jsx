import { Outlet } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function RootLayout() {
    return (
        <div>
            <Header />
                {/*component placeholder */}
                <div className="mx-20 min-h-screen">
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}

export default RootLayout