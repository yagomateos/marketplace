import Search from './pages/search'
import Dashboard from './pages/dashboard'
import Listings from './pages/listings'
import Messages from './pages/messages'
import Orders from './pages/orders'
import Help from './pages/help'
import Settings from './pages/settings'

export default function PageContainer({ step , userData }) {

  const returnComponent = () => {
    switch (step) {
      case 0:
        return <Search/>;
        case 1:
          return <Dashboard userData={userData}/>; 
          case 2:
            return <Listings userData={userData}/>; 
            case 3:
              return <Messages/>
              case 4:
              return <Orders/>
              case 5:
                return <Help/>
                case 6:
                return <Settings/>
      default:
        return <>default component</>; 
    }
  }

  return (
    <div className='p-6 flex items-start w-full justify-center'>
      {returnComponent()}
    </div> 
  );
}
