import Profilepic from './Profilepic'
import Cardbody from './Cardbody'
import Cardfooter from './Cardfooter'


function Card(){
    return(
      <section className='bg-[#23252C] w-[550px] h-[900px] py-[44px] px-[116px]'>
        <Profilepic/>
        <Cardbody  name='Laura Smith' work='Frontend Developer' website='laurasmith.website'/>
        <Cardfooter/>
      </section>
    )
    
}

export default Card