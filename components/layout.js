import Header from './header'
import Navigation from './navigation'

export default function Layout({children}){
    return(
        <div id="app">
            <Header />
            <Navigation />
            {children}
            
        </div>
    )
}