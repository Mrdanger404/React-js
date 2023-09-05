import List from "./Component/List"
import Data from './info.json'


function App() {

  console.log(Data)
  return (
    <>
      {Data.map((item,index) => <List key={index} username={item.name} about={item.about} email={item.email} phone={item.phone} />)}
    </>
  )
}

export default App
