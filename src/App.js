import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const headerStyle = {
    height: "100vh",
    backgroundImage: 'url("students/25.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  const contentStyle = {
    background: 'url("students/background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div>
      <div style={headerStyle}>
        {/* Your header content goes here */}
        <h1 className="text-4xl text-white font-bold">HAPPY NEW YEAR</h1>
        
        <p>
            <p className=" text-white font-bold">You really mean the world to me and I am so proud of you for not giving up on me even if you could have.... You are my escape... I feel so so comfotable around me ... I am always excited when I see your notification on my phone .... In my eyes you are just so perfect... There were times you didnt even realize you were helping me get through but you were the reason I did... Thank you for being someone I can always go to and feel safe with..... Thank you is a small word and would never be enough... I talk to people for hours and cant uncomfortably reveal a thing But then its you even when we talk for a few minutes I end up revealing everything and with a smile on my face .... Talking to you feels like a hug   
I’ll stay when it gets hard... I’ll stay when everyone leaves ... i’ll stay even if you want to leave too... I’ll stay because i know what’s it like to have people leave... I’ll stay today , after today .... any everyday after...I’ll always be there for you...You are the cutest most wonderful person I have had fortune of meeting so if I say I Love You I mean it ... If I say my heart always skips a beat when I lay eyes on you its true.... When I say I'll try to never hurt you its true Because you are so very precious to me .... And I dont want to break you.... </p> 
        </p>
      </div>

      <div className='w-full' style={contentStyle}>
        <div className='w-3/4 m-auto'>
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d) => (
                <div key={d.name} className="bg-white h-auto text-black rounded-xl">
                  <div className='h-auto bg-indigo-400 flex justify-center items-center rounded-t-xl'>
                    <img src={d.img} alt="" className="h-50 w-auto  "/>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-center">{d.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-4 text-white">MY FAVOURITE VIDEOS</h2>
            <Slider {...settings}>
              {videoData.map((video) => (
                <div key={video.id} className="flex justify-center items-center">
                  <video width="640" height="360" controls>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
            <div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
              }

const videoData = [
  { id: 1, src: "/students/v1.mp4" },
  { id: 2, src: "/students/v2.mp4" },
  { id: 3, src: "/students/v3.mp4" },
  { id: 4, src: "/students/v4.mp4" },
  { id: 5, src: "/students/v5.mp4" },
  { id: 6, src: "/students/v6.mp4" },
  
];


const data = [
  {
    name: `First time we went to movies`,
    img: `/students/5.jpg`,
    review: `As I have told you many times my heart was rushing so fast and it was a huge milestone for me to achieve in our friendship because if i had been terrified and I had never asked you then there is a chance we may never would have gone out so thank you so much for not saying NO.`
 
  },
  {
    name: `The ICECREAM DATE`,
    img: `/students/7.jpg`,
    review: `In this whole wide world if I wanna go on an ice cream date and feed her Ice cream with my hands Its YOU... And this was the first time I fed you Ice cream by my hand and you said "Ice cream bhi nhi khilani ati tmhain" .`
  },
  {
    name: `Middle Finger`,
    img: `/students/8.jpg`,
    review: `Love this one because pta nhi q bohat zyada achi lagti hai .... And maina soocha tha "Kitni cool hai yaar ye aur itni comfotable hai mera sath " and that was a wonderful feeling.`
  },
  {
    name: `Cutie McPretty`,
    img: `/students/20.jpg`,
    review: `Wo dekhna mein kesi seedhi sadi lagti hai bolti wo tou kuch nhi smjhti andar sa kitni taiz hai.... Kabhi ajeeb si kabhi haseen lagti .... Love this picture and Love you the most  .`
  },
  {
    name: `Hugs`,
    img: `/students/16.jpg`,
    review: `I am so jealous of HUGSY because he got to hug you and I never got to and AAAAAAAAAAAa I really want to hug you and make you feel like the world is cruel but my arms are a safe spcae for you to be at.`
  },
  {
    name: `My SIGNATURE POSE`,
    img: `/students/24.jpg`,
    review: `This is my signature pose and thanks for letting me take picture in this pose.`
  },
  {
    name: `CUTEST GIFT`,
    img: `/students/9.jpg`,
    review: `The cutest letter and the cutest gift.... I liked all of the gift but I loved this letter the most... It was so geniuine and WOW.... I remember holding your hand after this because it really touched my heart.`
  },
  {
    name: `My CUTEST GIFT`,
    img: `/students/10.jpg`,
    review: `I needed something to admire somthing beautiful and thats why I gave you daisies .....I love my this gift to you .... I mean it was so pure and you looked so cute in the dasies I just hate that the DAISIES dry up so fast.... .`
  },
  {
    name: `MS PATAKHA`,
    img: `/students/23.jpg`,
    review: `OK even you have to admit you look so hot in this dress i mean WOW.... Koi itna haseen khubsurat kaisa hoe sakta hai and tmhara dil bhi acha hai how you that I can never really understand and I am impressed.`
  },
  {
    name: `LOVE THIS DAY`,
    img: `/students/15.jpg`,
    review: `Apparently this was the last time we took alot of pictures together and you didnt had an issue sitting close to me and I remember you were upset that day and I cheered you up this is the day you became mother of BUGSY our child.`
  },
  {
    name: `My BABY`,
    img: `/students/c.jpg`,
    review: `YRRRRRRRR I wanted to hug you bad today.... itni koi achi feeling ati tmhara sath beth ke I cant explain.... And yaaaaar itni cute lag rahi thi na tm uss din ufffff  .`
  },
  {
    name: `My FRUTELLA`,
    img: `/students/d.jpg`,
    review: `I love the cute frutella wrapper thing you did.... So you are my frutella and its you your nickname ... Consider this a new year gift.`
  },
];

export default App;
