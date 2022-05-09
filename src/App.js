import './App.css';
import Card from './component/Card'
import data from './personData'


// const PersonData = []
// data.map((d,index) => {
//   PersonData.push(<Cardbody name={d.name} work={d.work} website={d.website} index={index} key={index}/>)
// })

function App() {
 const PersonalData = data.map(d=>{
   return (
     <Card v={d}/>
   )
 })
  return (
    <section className='flex justify-center items-center h-[100vh]'>
      {PersonalData}
    </section>
  );
}


export default App;
