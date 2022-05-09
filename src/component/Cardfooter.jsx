import twitter from '../icons/Twitter Icon.svg'
import facebook from '../icons/Facebook Icon.svg'
import insta from '../icons/Instagram Icon.svg'
import github from '../icons/GitHub Icon.svg'


function Cardfooter(){
    return(
        <section className='py-[19.5px] px-[72.5px] flex justify-between bg-[#161619]'>
        <img src={twitter} alt='profile'/>
        <img src={facebook} alt='profile'/>
        <img src={insta} alt='profile'/>
        <img src={github} alt='profile'/>
        </section>
    )
}

export default Cardfooter