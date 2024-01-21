import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option";
import { IoSend } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { useState } from 'react';
import Typewriter from "typewriter-effect";
export default function ContactUs() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l2n672y', 'template_skkfqgg', form.current, 'AL_QeDqTX3JiynBHD')
            .then((result) => {
                console.log(result.text);
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: ''
                });

            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Container style={{ color: 'white' }} id='contactme'>
            <Row className='mt-5'>
                <p> </p>
            </Row>
            <Row className='mt-5'>
                <p> </p>
            </Row>
            <Row className="mb-5 mt-3">
                <Col lg="8">
                    <h1 className="display-4 mb-4" style={{ paddingTop: '80px', color: 'white' }}>Contact <strong className="purple">Me</strong> <span class="wave">👋</span></h1>
                    <hr className="t_border my-4 ml-0 text-left" />
                </Col>
            </Row>
            <Row className="sec_sp" style={{ color: 'white', borderRadius: '20px' }}>
                <Col lg="5" className="mb-5">
                    <h3 className="color_sec py-4" style={{ fontSize: '35px', fontFamily: 'courier' }}>Get in touch</h3>
                    <address style={{ fontSize: '20px', fontFamily: 'courier' }}>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${contactConfig.YOUR_EMAIL}`} color="purple">
                            {contactConfig.YOUR_EMAIL}
                        </a>
                        <br />
                        <br />
                        {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                            <p style={{ fontFamily: 'courier', fontSize: '20px' }}>
                                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                            </p>
                        ) : (
                            ""
                        )}
                    </address>
                    <Typewriter
                        options={{
                            strings: [
                                "Let's do something great together! 🏆",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            cursor: '_',
                            wrapperClassName: 'Typewriter__string',
                            cursorClassName: 'Typewriter__cursor_contact',
                            stringClassName: 'Typewriter-string',
                        }}
                    />
                    <br />
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/The-White-Bear"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.facebook.com/duythong27"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillFacebook />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:duythong.ptit@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillMail />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/d_d_thong/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>

                </Col>
                <Col lg="7" className="d-flex align-items-center">
                    <form
                        ref={form}
                        className="contact__form w-100"
                        style={{ color: 'white', borderRadius: '100px' }}
                        onSubmit={sendEmail}
                    >
                        <Row>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="user_name"
                                    placeholder="Name"
                                    type="text"
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    required
                                    onChange={handleChange}
                                    value={formData.user_name}
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-0"
                                    id="email"
                                    name="user_email"
                                    placeholder="Email"
                                    type="email"
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    required
                                    onChange={handleChange}
                                    value={formData.user_email}
                                />
                            </Col>
                        </Row>
                        <textarea
                            className="form-control rounded-0"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            style={{ background: 'white', borderRadius: '20px' }}
                            required
                            onChange={handleChange}
                            value={formData.message}
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg="12" className="form-group">
                                <button
                                    className="btn ac_btn"
                                    type="submit"
                                    style={{ background: 'white', borderRadius: '20px' }}
                                >
                                    Send <IoSend style={{ marginRight: '5px' }} />
                                </button>
                            </Col>
                        </Row>
                    </form>

                </Col>
            </Row>
            <Row className="mt-5">
                <p> </p>
            </Row>

        </Container>
    );
}
