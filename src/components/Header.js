import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
let config = {
    num: [2, 7],
    rps: 0.1,
    radius: [3, 4],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.5, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["#FFAB00"],
    cross: "cross", // cross or bround
    random: 15,  // or null,
    g: 1,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
};

class Header extends Component {
    render() {
        if(this.props.data){
            var project = this.props.data.project;
            var github = this.props.data.github;
           var name = this.props.data.name;
           var description= this.props.data.description;
          
         }
        return (
            <header id="home">
                <ParticlesBg type="polygon" config={config} bg={true}/>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#Works">Works</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    
                    <div className="banner-text ">
                        <h1 className="responsive-headline">{name}</h1>
                        <h3>{description}.</h3>
                        <div className="half-face"></div>
                        <hr />
                        
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        );
    }
}

export default Header;