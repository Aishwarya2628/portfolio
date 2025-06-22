// src/components/Contacts/Contacts.js

import React, { useContext } from 'react';
import {
    FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaBloggerB,
    FaRedditAlien, FaStackOverflow, FaCodepen, FaInstagram,
    FaGitlab, FaMediumM
} from 'react-icons/fa';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>

                    <div className='contacts-details'>
                        {contactsData.email && (
                            <a href={`mailto:${contactsData.email}`} className='personal-details'>
                                <div className='details-icon' style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                    <FiAtSign />
                                </div>
                                <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
                            </a>
                        )}
                        {contactsData.phone && (
                            <a href={`tel:${contactsData.phone}`} className='personal-details'>
                                <div className='details-icon' style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                    <FiPhone />
                                </div>
                                <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
                            </a>
                        )}
                        {contactsData.address && (
                            <div className='personal-details'>
                                <div className='details-icon' style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                    <HiOutlineLocationMarker />
                                </div>
                                <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
                            </div>
                        )}

                        <div className='socialmedia-icons'>
                            {socialsData.github && (
                                <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                    <FaGithub className='social-icon' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                    <FaLinkedinIn className='social-icon' />
                                </a>
                            )}
                            {socialsData.instagram && (
                                <a href={socialsData.instagram} target='_blank' rel='noreferrer'>
                                    <FaInstagram className='social-icon' />
                                </a>
                            )}
                            {socialsData.twitter && (
                                <a href={socialsData.twitter} target='_blank' rel='noreferrer'>
                                    <FaTwitter className='social-icon' />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a href={socialsData.medium} target='_blank' rel='noreferrer'>
                                    <FaMediumM className='social-icon' />
                                </a>
                            )}
                            {socialsData.blogger && (
                                <a href={socialsData.blogger} target='_blank' rel='noreferrer'>
                                    <FaBloggerB className='social-icon' />
                                </a>
                            )}
                            {socialsData.youtube && (
                                <a href={socialsData.youtube} target='_blank' rel='noreferrer'>
                                    <FaYoutube className='social-icon' />
                                </a>
                            )}
                            {socialsData.reddit && (
                                <a href={socialsData.reddit} target='_blank' rel='noreferrer'>
                                    <FaRedditAlien className='social-icon' />
                                </a>
                            )}
                            {socialsData.stackOverflow && (
                                <a href={socialsData.stackOverflow} target='_blank' rel='noreferrer'>
                                    <FaStackOverflow className='social-icon' />
                                </a>
                            )}
                            {socialsData.codepen && (
                                <a href={socialsData.codepen} target='_blank' rel='noreferrer'>
                                    <FaCodepen className='social-icon' />
                                </a>
                            )}
                            {socialsData.gitlab && (
                                <a href={socialsData.gitlab} target='_blank' rel='noreferrer'>
                                    <FaGitlab className='social-icon' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Contacts;

