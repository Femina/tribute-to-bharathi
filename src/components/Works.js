import React, { Component } from 'react';

class Work extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "../../images/bharathiyar.jpg";
         var bio = this.props.data.bio;
         
      }

      return (
         <section id="Works">
            <div className="row">
               
               <div className="nine columns main-col">
                  <h2>His Works</h2>

                  <p><a href="https://en.wikipedia.org/wiki/Subramania_Bharati">Wiki</a></p>
                  <h2>Bharathi: A Poet</h2>
                  <p>Significantly, a new age in Tamil literature began with Subramaniya Bharathi. Most part of his compositions are classifiable as short lyrical outpourings on patriotic, devotional and mystic themes. Bharathi was essentially a lyrical poet. “Kannan Pattu” “Nilavum Vanminum Katrum” “Panchali Sabatam” “Kuyil Pattu” are examples of Bharathi’s great poetic output.</p>
                  <p>Bharathi is considered as a national poet due to his number of poems of the patriotic flavour through which he exhorted the people to join the independence struggle and work vigorously for the liberation of the country. Instead of merely being proud of his country he also outlined his vision for a free India. He published the sensational “Sudesa Geethangal” in 1908.</p>
                  <p>Bharati is considered as one of the pioneers of modern Tamil literature.[8] Bharati used simple words and rhythms, unlike his previous century works in Tamil, which had complex vocabulary. He also employed novel ideas and techniques in his devotional poems.[1] He used a metre called Nondi Chindu in most of his works, which was earlier used by Gopalakrisnha Bharathiar.[9]</p>
                  <h2>Bharathi: A Journalist</h2>
                  <p>Many years of Bharathi’s life were spent in the field of journalism, Bharathi, as a young man began his career as a journalist and as a sub-editor in “Swadesamitran” in November 1904.</p>
                  <p>“India” saw the light of the day in May, 1906. It declared as its motto the three slogans of the French Revolution, Liberty, Equality and Fraternity. It blazed a new trail in Tamil Journalism. In order to proclaim its revolutionary ardour, Bharathi had the weekly printed in red paper. “India” was the first paper in Tamil Nadu to publish political cartoons. He also published and edited a few other journals like “Vijaya”.</p>
                  <p>It is not surprising therefore that soon a warrant was waiting at the door of the “India” office for the arrest of the editor of the magazine. It was because of this worsening situation in 1908 that Bharathi decided to go away to Pondicherry, a French territory at that time, and continue to publish the “India” magazine. Bharathi resided in Pondicherry for sometime to escape the wrath of the British imperialists. During his exile, Bharathi had the opportunity to mingle with many leaders of the militant wing of the independence movement such as Aurobindo, Lajpat Rai and V.V.S. Aiyar, who had also sought asylum in the French, Pondicherry. The most profitable years of Bharathi’s life were the ten years he spent in Pondicherry.</p>
                  <p>From Pondicherry, he guided the Tamil youth of Madras to tread in the path of nationalism. This increased the anger of the British towards Bharathi’s writings as they felt that it was his writings that induce and influence the patriotic spirit of the Tamil youth. Bharathi met Mahatma Gandhi in 1919 in Rajaji’s home at Madras. Bharathi entered British India near Cuddalore in November 1918 and was promptly arrested. Even in prison, he spent his time in writing poems on freedom, nationalism and country’s welfare.</p>
                  <p>In his early days of youth he had good relations with Nationalist Tamil Leaders like V.O.Chidambaram, Subramanya Siva, Mandayam Thirumalachariar and Srinivasachari. Along with these leaders he used to discuss the problems facing the country due to British rule. Bharathi used to attend the Annual sessions of Indian National Congress and discuss national issues with extremist Indian National Leaders like Bipin Chandra Pal, B.G. Tilak and V.V.S. Iyer. His participation and activities in Benaras Session (1905) and Surat Session (1907) of the Indian National Congress impressed many national leaders about his patriotic fervour. Bharathi had maintained good relations with some of the national leaders and shared his thoughts and views on the nation and offered his suggestions to strengthen the nationalist movement. Undoubtedly, his wise suggestions and steadfast support to the cause of nationalism rejuvenated many national leaders. Thus Bharathi played a pivotal role in the freedom of India.</p>
                  <h2>Bharthi: A Social Reformer</h2>
                  <p>Bharathi was also against caste system. He declared that there were only two castes-men and women and nothing more than that. Above all, he himself had removed his sacred thread. He had also adorned many Dalits with sacred thread.  He used to take tea sold in shops run by Muslims. He along with his family members attended church on all festival occasions. He advocated temple entry of Dalits. For all his reforms, he had to face opposition from his neighbours. But Bharathi was very clear that unless Indians unite as children of Mother India, they could not achieve freedom. He believed in women’s rights, gender equality and women emancipation. He opposed child marriage, dowry and supported widow remarriage.</p>
               </div>
               <div className="three columns">
                  <img className="profile-pic" src="images/black-him.png" alt="Bharathiyar" />
               </div>
            </div>

         </section>
      );
   }
}

export default Work;
