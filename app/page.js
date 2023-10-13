import './google.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <nav>
      	<a href="#">Gmail</a>
      	<a href="#">Images</a>
        <Image src="/g-menu.PNG" alt="me" width="40" height="40" />
      	<button>Sign in</button>
      </nav>





      <section className="section-1">
      	<img src="/logo.png" className="logo"/>
      	<form>
          <br/>
      		<div className="s-box">
      			<img src="/search.svg" className="search-icon"/>
      			<input type="text" className="s-input"/>
      			<img src="/vs.png" className="vs-icon"/>
      			<input type="submit" className="s-btn" value="Google Search"/>
      			<input type="submit" className="s-btn" value="I'm Feeling Lucky"/>
      		</div>
      	</form>

        <div className="lang">  
          <Image src='/YT_RedPlayButton_Icon_48x48.png' width="32" height="32" className='youtube'></Image>
      		<a href="#"> Look back at iconic creators and moments from 15 years of YouTube in India </a>
      	</div>


      	<div className="lang">
      		Google offered in:
      		<a href="#"> हिन्दी </a>
      		<a href="#">বাংলা</a>
      		<a href="#">తెలుగు</a>
      		<a href="#">मराठी</a>
      		<a href="#">தமிழ்</a>
      		<a href="#">ગુજરાતી</a>
      		<a href="#">ಕನ್ನಡ</a>
      		<a href="#">മലയാളം</a>
      		<a href="#">ਪੰਜਾਬੀ</a>
      	</div>
      </section>


    </div>
  )
}
