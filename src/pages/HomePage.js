import React from 'react';
import Article from '../components/Article';


const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Model matematyczny przewidujący, że podstawowym budulcem materii nie są cząstki w postaci punktu, lecz struny wielkości 10-31 metra. Pierwotna teoria strun, zwana teorią strun bozonowych, powstała w 1970 roku."
    },
    {
        id: 2,
        title: "Czym jest paradoks Fermiego",
        author: "Andrzej Bułka",
        text: " Wyraźna sprzeczność pomiędzy wysokimi oszacowaniami prawdopodobieństwa istnienia cywilizacji pozaziemskich i brakiem jakichkolwiek obserwowalnych śladów ich istnienia. Fermiemmu przypisuje się pierwsze sformułowanie tego problemu w sposób prosty i klarowny."
    },
    {
        id: 3,
        title: "Ciemna materia a ciemna energia",
        author: "Krzysztof Gwiazda",
        text: "Ciemna energia różni się istotnie od ciemnej materii – jej oddziaływanie grawitacyjne musi mieć charakter odpychający, gdyż inaczej, wciągnięta w obręb galaktyk i gromad galaktyk, wpływałaby dynamicznie na widoczną materię. Żadnego takiego wpływu jednak nie zaobserwowano."
    }
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;