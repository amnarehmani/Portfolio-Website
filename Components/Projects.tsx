import React from 'react';
import Image from 'next/image';
import "@/app/styles/projects.css"; 
import Link from 'next/link';


function Projects() {
  return (
    <div className="container">
        <div className='heading'>
            <h2>My <span>Projects</span></h2>
        </div>
      <div className="card__container">

        <article className="card__article">
        <Image src="/images/01.jpg" alt="project" 
        width={300}
        height={300}
        className="card__img" />


          <div className="card__data">
            <span className="card__description">Project 01</span>
            <h2 className="card__title">Simple Calculator</h2>
            <Link href="#" className="card__button">Read More</Link>
          </div>
        </article>


        <article className="card__article">
        <Image src="/images/02.jpg" alt="project" 
        width={300}
        height={300}
        className="card__img" />

          <div className="card__data">
            <span className="card__description">Project 02</span>
            <h2 className="card__title">Responsive Website</h2>
            <Link href="#" className="card__button">Read More</Link>
          </div>
        </article>
      
        

        <article className="card__article">
        <Image src= "/images/05.jpg" alt="project" 
        width={300}
        height={300}
        className="card__img" />


          <div className="card__data">
            <span className="card__description">Project 03</span>
            <h2 className="card__title">Todo App</h2>
            <Link href="#" className="card__button">Read More</Link>
          </div>
        </article> 
      </div>
    </div>
  );
}

export default Projects;
