import Button from './Button'

function Cardbody(props){
    return(
        <section key={props.index} className='px-[35px] py-[25px] bg-[#1A1B21]'>
          <h1 className='font-bold text-[25px] leading-[30px] text-white text-center'>{props.name}</h1>
          <p className=' text-[12.8px] leading-[15px] text-[#F3BF99] text-center mt-[6px]'>{props.work}</p>
          <p className=' text-[12.8px] leading-[15px] text-white text-center mt-[6px]'>{props.website}</p>
          <div className='flex justify-between mt-[15px]'>
          <Button bname='Email'/>
          <Button bname='Linkedin'/>
          </div>
          <h5 className='font-bold text-[16px] leading-[24px] text-white mt-[33px]'>About</h5>
          <p className=' text-[10.24px] leading-[15px] text-white'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h5 className='font-bold text-[16px] leading-[24px] text-white mt-[25px]'> Interests</h5>
          <p  className=' text-[10.24px] leading-[15px] text-white'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </section>
    )
}

export default Cardbody