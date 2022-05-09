import Profilepic from './Profilepic'
import Cardfooter from './Cardfooter'
import Cardbody from './Cardbody'



function Card(prop){
  console.log(prop.v)
    return(
      <section className='bg-[#23252C] w-[550px] h-[950px] py-[44px] px-[116px]'>
        <Profilepic/>
        <Cardbody name = {prop.v.name} work={prop.v.work} website = {prop.v.website}/>
        <Cardfooter/>
      </section>
    )
    
}

export default Card