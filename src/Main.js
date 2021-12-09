// import email from './email.png'

export default function Main(){

  return(
    <div className='main'>
      <div className="header-1">Mat Snyder</div>
      <div className='job-title'>Hopeful Software Developer</div>
      <div className='contact'>
        <a href='https://github.com/mgmsnyder'>github.com/mgmsnyder</a>
      </div>
      <a href="mailto:mgmsnyder@gmail.com">
      <button className='button-email'>
        {/* <img src={email} className='icon-email' alt='' /> */}
        Email
      </button>
      </a>
      <div className="header-2">About</div>
      <div className="content">I am a developer with a particular interest in making things organized and efficient. I am not only interested in technological processing and data flow, but also the interpersonal processes that allow for effective individual and team work.</div>
      <div className="header-2">Interests</div>
      <div className="content">Husband. Father. Culture admirer. Frisbee manipulator. Board game aficionado. Mental health creator. Personal finance wizard. Fitness attempter.</div>

    </div>
  )
}