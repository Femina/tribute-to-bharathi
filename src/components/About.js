import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "../../images/bharathiyar.jpg";
         var bio = this.props.data.bio;
         
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src="images/black-him.png" alt="Bharathiyar" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Him</h2>

                  <p><a href="https://en.wikipedia.org/wiki/Subramania_Bharati">Wiki</a></p>
                  <p>Subramaniya Bharathiyar was born on 11th December 1882, in a village called Ettayapuram in Tirunelveli District in Tamil Nadu and his childhood name was Subbiah. His father was Chinnaswamy Iyer and his mother was Lakshmi Ammal.</p>
                  <p>At the age of seven, Subbiah started writing poems in Tamil. When he was eleven, he wrote in such a way that even learned men praised him for his great knowledge and skill. In the eleventh year, Subbiah felt that he had to establish his credentials. He threw a challenge to the eminent men in the assembly of scholars that they should have a contest with him in a debate on any subject without any previous notice or preparation. The contest was held at a special sitting of the Ettayapuram Durbar at which the Rajah (the ruler) himself was present. The subject chosen was “Education”. Subbiah efficiently won the debate. This was a memorable moment in Subbiah’s life. The boy who was till then referred to as “Ettayapuram Subbiah” came henceforth to be known as “Bharathi”, and later he was respectfully referred to as “Bharathiar” by nationalists and by millions of Tamil lovers all over the globe.</p>
                  <p>Bharathi was also against caste system. He declared that there were only two castes-men and women and nothing more than that. Above all, he himself had removed his sacred thread. He had also adorned many Dalits with sacred thread.  He used to take tea sold in shops run by Muslims. He along with his family members attended church on all festival occasions. He advocated temple entry of Dalits. For all his reforms, he had to face opposition from his neighbours. But Bharathi was very clear that unless Indians unite as children of Mother India, they could not achieve freedom. He believed in women’s rights, gender equality and women emancipation. He opposed child marriage, dowry and supported widow remarriage.</p>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
