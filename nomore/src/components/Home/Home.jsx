import React, {Component} from 'react';
import {Link} from 'react-router';
// import Header from '../Header/Header.jsx'
import style from './Home.css';

export default class Home extends Component {
  render(){
    return(
      <div className="home">

        <section className="top" >
           <h1>PHOTOSHARE WITH INMATES</h1>
           <p>Simply Create Story Boards and tag them with your pictures <br/>
           thoughts, favorite articles and anything else that you feel <br/>
           they might be interested in seeing.
           </p>
        </section>
        <section className="descr">
         <h1>What Is FLICKBOOK?</h1>
          <p>FLICKBOOK is the <span>first and only 100% free </span>photo sharing app
          that allows users to create public and private walls for their incarcerated
          loved ones. FLICKBOOK allows users to tag photos and stories from any and/or
          all their social accounts easily with the click of a button</p>

          <br/>

          <p>FLICKBOOK brings the convience and ease of photo sharing and social media
          to the palms of your hands. So that you stay connected and keep your incarcerated
          loved one up to date on social and current events happening around you.
          </p>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3Z0j8ZO4GXOOyJqlsJQkr68Is7Fs4kUz76I6NrIi1KNMk7ZvS"/>
        </section>
        <section className="works">
         <h1>How It Works </h1>
         <ul><Link to='app'>Start Photo Sharing Now</Link></ul>
         <div className="wrksflex">
          <article>
            <h2>Step 1</h2>
            <p>Search our database to see if your incarcerated loved one <br/>
            is in our database.</p>
            <p>If he/she is in our database...proceed to step 3</p>
            <p>If the inmate is not in our system and database... proceed to Step 2</p>
          </article>
          <article>
            <h2>Step 2</h2>
            <p>Register and create a board for your incarcerated loved ones <br />
            by filling out a simple 1 step form</p>
            <p>Once you have registered an inmate, Begin posting to his/her board<br />
            ..and remember to share with other friends and family so that they can now <br/>
            post to board!!</p>
          </article>
          <article>
            <h2>Step 3</h2>

            <p>Add title to your post</p>
            <p>Copy and paste your image url into our form</p>
            <p>Press the post button and off your photo goes</p>
          </article>
         </div>

         </section>
        <section className="insp">
         <h1>INSPIRATION </h1>
          <p> Having spent over 10yrs incarcerated in several New Jersey State Prisons for
          crimes commited at the age of of 18, the devloper (Natty B. Davis) witnessed
          first hand the difficulties  family and loved ones were having trying to
          share their photos and life events with himself and other prisoners.
          </p>
          <br/>

          <p>Seeing that the technology/solution existed, but were not being utilized for
          the benifits of those incarcerated or their family and friends, Mr.Davis embarked
          on a mission to create FLICKBOOK. His vision was that there should be no barriers
          to communications between the two groups, and that it should not cost anything to
          communicate and share with your loved ones.
          </p>
          <br/>
          <p>Immediately upon release 15 months ago, Mr.Davis began self teaching himself how
          to code. Realizing that he needed an all or nothing approach to fully grasp the concepts
          of coding, he enrolled in <a href="http://www.generalassemb.ly">General Assembly</a>
          web development immersive bootcamp, where he is currently pursuing his dreams and working
          on the full implementations of this app
          </p>
       </section>

      </div>

      )
  }

}

