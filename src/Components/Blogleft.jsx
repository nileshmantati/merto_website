import React from 'react';
import { Container, Row, Col, Card, ListGroup, Form, InputGroup, Button } from 'react-bootstrap';
import '../Styles/blog.css';

function Blogleft() {
    const article = [{
        index: 1,
        img: <img src={require('../img/blog-1.jpg')} alt="Blog Img" />,
        title: "Weekday Outfit Inspiration for All Occasions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Beauty & Fashion",
        date: "April 25, 2025",
        byname: "Myoui Mina",
        comments: "4 Comments"
    },
    {
        index: 2,
        img: <img src={require('../img/blog-2.jpg')} alt="Blog Img" />,
        title: "100% Pure & Natural Sage Essential Oil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Cosmetics",
        date: "April 22, 2025",
        byname: "Myoui Mina",
        comments: "4 Comments"
    },
    {
        index: 3,
        img: <img src={require('../img/blog-3.jpg')} alt="Blog Img" />,
        title: "Tips for Cleaning Desktop & Laptop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Electronics",
        date: "April 18, 2025",
        byname: "Myoui Mina",
        comments: "0 Comments"
    },
    {
        index: 4,
        img: <img src={require('../img/blog-4.jpg')} alt="Blog Img" />,
        title: "Giorgio Armani Si Intense Eau de Parfum Review",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Cosmetics",
        date: "April 15, 2025",
        byname: "Myoui Mina",
        comments: "0 Comments"
    },
    {
        index: 5,
        img: <img src={require('../img/blog-5-1.jpg')} alt="Blog Img" />,
        title: "The Best Affordable Convertible Cars to Rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Autoparts",
        date: "April 11, 2025",
        byname: "Myoui Mina",
        comments: "0 Comments"
    },
    {
        index: 6,
        img: <img src={require('../img/blog-6.jpg')} alt="Blog Img" />,
        title: "10 Things to Learn from Apple’s Marketing Strategy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Electronics",
        date: "April 8, 2025",
        byname: "Myoui Mina",
        comments: "0 Comments"
    },
    {
        index: 7,
        img: <img src={require('../img/blog-7.png')} alt="Blog Img" />,
        title: "How to Show Steps on Apple Watch SE Face",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Electronics",
        date: "April 1, 2025",
        byname: "Matthew",
        comments: "0 Comments"
    },
    {
        index: 8,
        img: <img src={require('../img/blog-13.jpg')} alt="Blog Img" />,
        title: "Sandalwood scents to adore this autumn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Cosmetics",
        date: "March 28, 2025",
        byname: "Matthew",
        comments: "0 Comments"
    },
    {
        index: 9,
        img: <img src={require('../img/blog-9.jpg')} alt="Blog Img" />,
        title: "10 Lamps & Lighting Ideas for Home Decor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta et nisi at sodales. Integer sit amet sapien magna. Quisque elit sapien, volutpat ut imperdiet vitae, congue nec magna. Morbi blandit egestas leo non elementum. Mauris blandit non mauris eu pretium. Vivamus pellentesque metus nisl, tincidunt aliquet magna volutpat a. Proin tempor metus vulputate, vestibulum urna eget, tempus turpis. Nam suscipit tortor sed elit aliquam dignissim. In rutrum lacus id auctor feugiat. Nam pretium lacinia magna, sit amet rhoncus massa imperdiet a. Ut viverra libero laoreet faucibus hendrerit.",
        link: "Decor & Accents",
        date: "March 25, 2025",
        byname: "Matthew",
        comments: "0 Comments"
    },
    ];
    return (
        <div>
            <aside className="left_side">
                <div className="company_heading text-start mb-4">
                    <h1>News about our company <br />
                        and fashion world!</h1>
                </div>
                <article>
                    <ul className='mb-0 ps-0 d-flex flex-column'>
                        {article.map((item, index) => (
                            <li key={index} className='border-1 border-bottom pb-4 mb-5'>
                                <div className="img_box px-0 rounded-2 overflow-hidden">
                                    {item.img}
                                </div>
                                <div className="blog_text py-4">
                                    <div className="meta_top text-start d-flex align-items-center flex-wrap">
                                        <a href="#" className='text-uppercase pe-2 me-2'>{item.link}</a>
                                        <span className='ms-3 me-2 pe-2'>{item.date}</span>
                                        <div className="d-flex align-items-center">
                                            <span className='not_active ms-3 pe-2'>By</span>
                                            <a href="#" className='pe-2'>{item.byname}</a>
                                        </div>
                                        <span className='not_active ms-3'><i className="fa-regular fa-comment me-2" />{item.comments}</span>
                                    </div>
                                    <h3 className="title text-start">
                                        <a href="#">{item.title}</a>
                                    </h3>
                                    <p className='mb-0 text-start'>{item.description}</p>
                                    <Button className="mt-4 mb-3 rounded-2 text-uppercase float-start">
                                        read more
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>
            </aside>
        </div>
    )
}

export default Blogleft
