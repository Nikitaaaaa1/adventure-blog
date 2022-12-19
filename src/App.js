
// import './App.css';
import {Route, Routes} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Navbar from "./components/navbar/Navbar";
import Item from "./item/item";
import {useState} from "react";
import Error from "./pages/error/Error";


function App() {
    const [items, setItems] = useState([{
        header: 'Richird Norton photorealistic rendering as real photos',
        description: 'Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.',
        author: 'Jennifer Lawrence',
        readTimes:'4 minutes',
        publicationDate: '08.08.2021',
        data:'Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than parallel ideas. Dramatically visualize superior interfaces for best-of-breed alignments. Synergistically formulate performance based users through customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively enhance visionary opportunities through revolutionary schemas. Progressively network just in time customer service without real-time scenarios.\n' +
            '\n' +
            'Synergistically drive e-business leadership with unique synergy. Compellingly seize market positioning ROI and bricks-and-clicks e-markets. Proactively myocardinate timely platforms through distributed ideas. Professionally optimize enabled core competencies for leading-edge sources. Professionally enhance stand-alone leadership with innovative synergy. Rapidiously generate backend experiences vis-a-vis long-term high-impact relationships. Authoritatively supply market-driven mindshare and bricks-and-clicks opportunities. Holisticly create diverse innovation through adaptive communities. Efficiently empower seamless meta-services with impactful opportunities. Distinctively transition virtual outsourcing with focused e-tailers.\n' +
            '\n' +
            '“ Monotonectally seize superior mindshare rather than efficient technology. ” \n' +
            '\n' +
            'Compellingly enhance seamless resources through competitive content. Continually actualize 24/365 alignments for resource-leveling platforms. Energistically enhance high standards in models and professional expertise. Intrinsicly iterate extensible metrics for prospective opportunities. Continually develop leading-edge experiences through quality e-services.',
        photo: 'images/ItemPhoto.png'
    },
        {
        header: 'Dream destinations to visit this\n' +
            'year in Paris',
            description: 'Progressively incentivize cooperative systems through\n' +
            'technically sound functionalities. Credibly productivate\n' +
            'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage2.png',
            data: ''
        },
        {
            header: 'Breathtaking first-person photos\n' +
                'around Europe',
            description: 'Progressively incentivize cooperative systems through\n' +
                'technically sound functionalities. Credibly productivate\n' +
                'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage3.png',
            data: ''
        },
        {
            header: 'What collectors need to know about\n' +
                'authenticity',
            description: 'Progressively incentivize cooperative systems through\n' +
                'technically sound functionalities. Credibly productivate\n' +
                'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage4.png',
            data: ''
        },
        {
            header: 'Instagram artists with great\n' +
                'photography skills',
            description: 'Progressively incentivize cooperative systems through\n' +
                'technically sound functionalities. Credibly productivate\n' +
                'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage5.png',
            data: ''
        },
        {
            header: 'Thins to know before visiting\n' +
                'Cave in Germany',
            description: 'Progressively incentivize cooperative systems through\n' +
                'technically sound functionalities. Credibly productivate\n' +
                'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage6.png',
            data: ''
        },
        {
            header: 'Nina Smith vibrant work collab\n' +
                'with Nike Dunk',
            description: 'Progressively incentivize cooperative systems through\n' +
                'technically sound functionalities. Credibly productivate\n' +
                'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage7.png',
            data: ''
        },
        {
            header: 'Richard Norton photorealistic\n' +
                'rendering as real photos',
            description: 'Progressively incentivize cooperative systems through\n' +
                'technically sound functionalities. Credibly productivate\n' +
                'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage8.png',
            data: ''
        },
        {
            header: '25 quality collectors toys inspired\n' +
                'by famous films',
            description: 'Progressively incentivize cooperative systems through\n' +
                'technically sound functionalities. Credibly productivate\n' +
                'seamless data with flexible schemas.',
            publicationDate: '08.08.2021',
            photo: 'BlogImage.png',
            data: ''
        },

    ])
    console.log(items)
  return (
      <div>
          <Navbar/>
      <Routes>
          <Route path="/" element={<Home items={items} setItems={setItems}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/create' element={<Create/>}/>
          <Route path='item/:header' element={<Item props={items}/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
  );
}

export default App;
