import React, { Component } from 'react'
import Title from './Title.js'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"
export default class Services extends Component {
    state={
        services:[{
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:"Lorem ipsum dolor sit amet consectetur"
        },
        {
            icon:<FaHiking/>,
            title:"Hiking",
            info:"Lorem ipsum dolor sit amet consectetur"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free transport",
            info:"Lorem ipsum dolor sit amet consectetur"
        },
        {
            icon:<FaBeer/>,
            title:"free beer",
            info:"Lorem ipsum dolor sit amet consectetur"
        }
    ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {
                        this.state.services.map((item,index)=>{
                            return <article key={index}
                            className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
            </section>
        )
    }
}
