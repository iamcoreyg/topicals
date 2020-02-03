import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import axios from 'axios';
import Definitions from '../definitions';
import SadGirlsClub from '../sgc-logo.jpg';

var Logo = () => {
    return (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.91 228.44">
        <defs>
        <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;stroke:#ff8078;stroke-miterlimit:10;stroke-width:2px;}" }} />
        </defs>
        <title>Asset 6</title>
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <path className="cls-1 t" d="M72.44,71.94c.1,4.63.2,9.62.2,15.18,0,3.57-.73,4-3.8,3.2a106.09,106.09,0,0,1-13.62-4.55c-.77-.31-1-.16-1-.16s-.21.15-.2,1c.1,9.89.4,20,.4,30,0,8.45,0,16.7,0,25.15,0,8.68.1,17.46.2,26.12.11,9.24-.2,18.91,0,28.05.1,4.43.2,9.2.2,13.65v2.67c0,1.11-.24,2.07-.8,2.36a3,3,0,0,1-2.4-.07c-2.4-1-4.8-2-7.41-3.26s-5.4-2.61-8.2-4.11l-1.21-.65c-3.8-2.07-4.6-3.48-4.6-7.93,0-20.62-.08-41.29-.8-61.9V76.6a10.82,10.82,0,0,0-.2-3,14.33,14.33,0,0,0-2.8-1.91c-1.21-.74-2.66-1.61-3.81-2.4C20,67.5,17.26,65.63,14.78,64a8.06,8.06,0,0,1-2.4-2.64,6.55,6.55,0,0,1-.8-3.26c0-5.12-.2-10.61-.2-16.62,0-1.12.2-1.63.6-1.78.8-.3,1.6.29,2.4.86C19.19,44,24,46.91,28.8,49.76a175.77,175.77,0,0,0,18.62,9.42,165.52,165.52,0,0,0,16,6.12c1.8.59,3.61,1.13,5.21,1.59C71.64,67.75,72.38,68.89,72.44,71.94Z" transform="translate(-10.38)" />
            <path className="cls-1 o" d="M137.7,99.2a417.73,417.73,0,0,1,1.41,45.47c-.11,6.83-.32,14.17-.2,21.17.09,5.89,0,12.47-.21,19.61-.19,6.69-.35,14.15-2.2,21.38-2.5,9.78-8.41,16.7-17.21,19.33a33.45,33.45,0,0,1-10.21,1.26,41.58,41.58,0,0,1-8.41-1.38c-9.83-2.95-16-12-18-21.59a107.82,107.82,0,0,1-2-22.65c0-6.46-.05-16.08,0-20,.1-7.87.2-10.86.2-12v-9.35c0-7.57-.23-15.2,0-22.7.18-5.95.31-13.17,1.2-20,1.06-8.11,3.8-14.15,8.21-18.63a21.22,21.22,0,0,1,10.41-5.28,45.47,45.47,0,0,1,17.82.12A21.17,21.17,0,0,1,133.7,85.58,37.06,37.06,0,0,1,137.7,99.2Zm-33.23,58.34c0,6.45-.07,13.21,0,19.81.1,9,.1,18.82.4,25.62a4.9,4.9,0,0,0,3.21,4.38,4,4,0,0,0,4.8-1.43,11.86,11.86,0,0,0,1.2-4.21c.1-3.91.2-8.24.2-12.24v-2.23c0-4.45.19-8.91.2-13.35,0-12.74.18-25.55.2-38.28,0-10.52-.17-21.08-.4-31.61l-.2-7.12a4.56,4.56,0,0,0-4-4.31,3.88,3.88,0,0,0-4.41,2.72,21,21,0,0,0-.8,5.29c0,10.08-.1,20.28-.2,30.26,0,5.07.2,9.8,0,12.91-.09,1.46-.2,2.88-.2,3.77v10Z" transform="translate(-10.38)" />
            <path className="cls-1 p" d="M207,89.08c.26,10.25.2,20.58.2,30.87l-.2,2.74-.8.26.8-.26v2.89a44.07,44.07,0,0,1-.4,5.47,62.34,62.34,0,0,1-3.2,13.51c-1.85,5.16-4.61,11.5-10,16A32.12,32.12,0,0,1,181,166.76c-2.81.74-5.61,1.46-8.61,2.18a1,1,0,0,0-.6,1v48.3a1.06,1.06,0,0,1-.2.72,3.34,3.34,0,0,1-2.41,1.45l-.2,0c-7.4,1.7-13,2.52-18.21,3.37-3,.49-3.61-.1-3.61-3.44V74.62a5.18,5.18,0,0,1,.8-3.23,4.21,4.21,0,0,1,2.81-1.33c2.6-.43,5.2-.89,7.8-1.4,7.41-1.42,14.82-3.15,22.43-5.18a25.75,25.75,0,0,1,12.41-.62c5.4,1.28,8.15,5.63,10,9.58A41.31,41.31,0,0,1,207,89.08Zm-35,34.77V147c0,.22.2.4.2.62l1.2-.29,1.2-.29a18.75,18.75,0,0,0,3.6-1.36,9.81,9.81,0,0,0,4.61-8.12c.23-4.7.2-9.4.2-14.74v-4c0-5.34,0-22.51-.2-26.88-.18-3.49-1.8-5.51-4.61-5.68-1-.18-2.55.5-3.6.47a4.61,4.61,0,0,0-1.2.07l-1.2.29c0,.22-.2.72-.2.94v35.83Z" transform="translate(-10.38)" />
            <path className="cls-1 i" d="M241,50.11a38.38,38.38,0,0,1,0,5.78c0,22.14-.2,44.32-.4,66.48q-.09,17.85-.2,35.69V183c0,2.45,0,4.93-.2,7.2-.09,1.32-.13,2.82-.2,4.08a3.86,3.86,0,0,1-2.6,3.64l-2,.73c-5.61,2.07-11.41,4.16-17.22,6.4l-.2.07a2.47,2.47,0,0,1-2-.2c-.68-.42-.8-1.51-.8-2.4,0-14.54.19-29.14.2-43.69,0-6.67,0-13.35,0-19.81v-9.12c0-18.24.2-36.56.2-54.83,0-2.89.1-6.1.2-9.19.08-2.59,0-5.56,0-8.24,0-2.44,1-4.12,3.2-4.89,5-1.74,9.81-3.47,14.82-5.3l4-1.7c1.8-.66,3,.22,3,2.23A16.76,16.76,0,0,0,241,50.11Z" transform="translate(-10.38)" />
            <path className="cls-1 c" d="M309.47,117.43a2.32,2.32,0,0,1,2.2.39,2.67,2.67,0,0,1,1,2.12c0,4.45-.06,8.29-.2,11.86a79.94,79.94,0,0,1-4.6,24.44,43.92,43.92,0,0,1-19.22,23.18,86.18,86.18,0,0,1-9,4,42.54,42.54,0,0,1-7,2.16c-7.2,1.81-13-.66-17.21-6.87-3-4.43-3.94-10.15-4.81-15.54-1.26-7.83-1.4-16.84-1.4-25.29V127.16c-.2-10.58-.34-21.29-.2-31.75.11-7.78.34-15.8,1-23.08a66.28,66.28,0,0,1,6.61-23.19c3.63-7.31,9-13.26,15.41-16.5a111.86,111.86,0,0,1,17-6.94c6.49-2,12.21-.1,16.42,5.38,2.6,3.35,4.31,8,5.4,14.22a145.29,145.29,0,0,1,1.8,23.9v3.11a5,5,0,0,1-3.2,4.61c-7.69,2.55-11.53,3.9-19.22,6.66-1.6.58-3-.47-3-2.47,0-6.9.13-12.16,0-17.14-.1-3.62-.45-7.76-.8-11.06-.26-2.42-1.8-3.13-2.81-3.21a7.22,7.22,0,0,0-6,3.11,11.9,11.9,0,0,0-2.4,7.57c0,16.81.05,33.75.2,50.45.11,13,.32,26.24.4,39.25,0,2.43.19,5,.4,7.41.19,2.15,1.12,3.35,2.2,3.42a12.36,12.36,0,0,0,4.2-1.11,6.2,6.2,0,0,0,3.61-4.66,89.33,89.33,0,0,0,1-9.71V128.74a5.23,5.23,0,0,1,3.2-4.72C298.06,121.28,301.86,120,309.47,117.43Z" transform="translate(-10.38)" />
            <path className="cls-1 a" d="M383.14,136.59c.6,4.17,1.2,8.57,2,12.95a5.7,5.7,0,0,1-.4,3.82c-.64,1-1.8,1.27-3.4,1.44-2.2.22-16.62,2.51-18.82,2.91-1.8.32-2.78-.39-3-2.34-.37-3.23-.91-6.83-1.2-10.23-.28-3.2-.6-6.78-1-10.26-.2-.85-.2-.85-.81-.73-3.6.74-7.2,1.53-11,2.45-.6.14-.65.18-.8,1.3-.56,4.34-.92,9.25-1.4,13.48-.33,2.94-.66,5.76-1,8.71a3,3,0,0,1-2.6,2.66c-4,1-15.42,4.31-16.22,4.55l-.2.06c-1,.3-1.6.26-2-.06a2.46,2.46,0,0,1-.6-2.49c.2-1.17.25-2.54.4-3.68.27-2,.47-4.4.8-6.48.47-2.92.88-6.09,1.2-9,.25-2.23.6-4.41.8-6.48l.4-3c.8-6.25,1.52-13.06,2.41-19.41.35-2.53.7-5.15,1-7.63s.52-5.17.8-7.58c.59-5.19,1.41-10.65,2-15.71.4-3.45,1.08-6.8,1.4-10.19.25-2.66.67-5.34,1-8.07.49-4,.92-8.17,1.4-12.18.33-2.73.77-5.83,1.2-8.78.55-3.68.95-7.47,1.41-11.06.52-4.11,1-8.5,1.6-12.45l.4-3.66c.2-2.5.4-4.33.6-6.17s1-2.93,2.6-3.33c8-2,12-2.9,20-4.36a2.06,2.06,0,0,1,2.6,2c.8,6.31,1.76,12.88,2.81,20,.37,2.59.82,5.23,1.2,7.6.62,3.88,1,7.89,1.6,11.56.42,2.79.83,5.91,1.2,8.72.43,3.25.91,6.65,1.4,9.82s1,6.82,1.4,10c.36,2.59.79,5,1.2,7.64.38,2.38.68,5.18,1,7.44.27,1.85.59,3.73.8,5.69.37,3.26,1,6.61,1.41,9.85.35,2.59.84,5.51,1.2,8.1.44,3.24,1,6.38,1.4,9.64.37,2.83.8,5.71,1.2,8.57Zm-28.83-22c.2,0,.4-.09.4-.31a.26.26,0,0,0,.2-.26c-.8-6.74-1.41-17.3-2-27.4-.61-10.32-1.4-20.84-2-27.38q-1.77,28.07-3.2,56.15c0,.22,0,.44.2.4,0,.22,0,.22.2.17C350.59,115.38,351.83,115.1,354.31,114.58Z" transform="translate(-10.38)" />
            <path className="cls-1 l" d="M436.79,154.38a2.67,2.67,0,0,1-.6,2.11,2.47,2.47,0,0,1-2.4.43,142,142,0,0,0-14.41-1.78c-6.09-.46-12.42-.62-18.82-.56l-3.41.07a2.8,2.8,0,0,1-2.2-.82,3.29,3.29,0,0,1-.8-2.19c0-2.23-.11-20.79-.2-21.59-1-8.79-.19-19.88-.2-29.81V75.09c0-8.68-.1-17.46-.2-26-.11-9.23-.1-18.57-.2-27.59-.05-4.62,0-9.34,0-14V4.77a3.74,3.74,0,0,1,.8-2.7,3.79,3.79,0,0,1,2.4-1C399,1,401.36,1,404,1c3,0,6.21.12,9.41.32,3.8.22,4.6,1.22,4.6,5.67V68.66a4.94,4.94,0,0,1,.2,1.8c0,1.11-.05,2.73,0,4.89.1,3.71.16,9.42.2,15.82.1,12.38.39,25,.41,37.43a9.57,9.57,0,0,0,.2,2.91,8.39,8.39,0,0,0,2.8.51c1.2.13,2.6.52,3.8.68,2.6.34,5.53,1.13,7.81,1.22a3.25,3.25,0,0,1,2.2,1.3,4.59,4.59,0,0,1,1,2.65C436.59,143,436.69,148.43,436.79,154.38Z" transform="translate(-10.38)" />
            <path className="cls-1 s" d="M504.66,131c1.58,10.33,2.52,21.23.4,31.68-1.75,8.61-5.41,13.34-11.81,13.76-3,.33-6.64-.34-10.81-1.87-2.37-.87-5-2-7.81-3.29-2.6-1.24-5.41-2.72-8.41-4.4A40.28,40.28,0,0,1,446,138.5,74.19,74.19,0,0,1,445,120c.36-4.31,1-4.47,5-3.52.6.18,11.61,3.87,13.41,4.57a3.77,3.77,0,0,1,2,1.46,4.36,4.36,0,0,1,.6,2.7c-1,5.52.64,13,1.4,15.71a13.12,13.12,0,0,0,3.4,5.93c1.8,1.62,3.92,2.73,5.61,2.62s3.09-1.44,3.6-4c1.13-5.53,1.31-7.06.8-15.61a28.7,28.7,0,0,0-3.8-13.52,71.2,71.2,0,0,0-6.61-9.11l-.6-.93c-1.6-2-3.45-4.14-5.2-6.41-8.38-10.84-15.4-24-18-37.38-1.74-8.9-1.51-18.07-.4-27.48,1.07-9,4.21-15.38,9.21-19.07,3.4-2.21,7.67-2.82,12.81-1.38a39.78,39.78,0,0,1,13.42,6.2c10,7.36,17.67,19.86,19.41,32.41a97.54,97.54,0,0,1,.8,23.71l-.2.08c-.2,3-1,2.83-3.6,1.3l-.6-.4q-6.6-4.39-13.21-8.06a5.94,5.94,0,0,1-2.6-2.08,6.33,6.33,0,0,1-.6-3.43V62.11c0-4.67-.43-13.36-1-16.1a9.86,9.86,0,0,0-5.2-6.83c-2.36-1-4.81-.2-5.21,2.07-1.8,6.78-1.49,13.77-.2,20.84,2,10.88,8.15,20.42,15.42,28.8,1.6,2,3.2,4.27,5,6.46C497.23,107.27,502.83,119.07,504.66,131Z" transform="translate(-10.38)" />
        </g>
        </g>
    </svg>
    );
}

class Quiz extends React.Component {
    state = {
        message: '',
        displayShareModal: false,
        isLoading: false,
        loadingBackground: `linear-gradient(90deg, rgba(191,230,255,1) 48%, rgba(254,206,234,1) 58%)`,
        signs: ['Sun', 'Rising', 'Moon'],
        submitted: '',
        firstName: '',
        lastName: '',
        instagram: '',
        email: '',
        dateOfBirth: new Date(),
        timeOfBirth: new Date(),
        skinConcerns: [],
        skinConcernOptions: {
            acne: { displayText: 'Acne' },
            texture_scarring: { displayText: 'Texture / Scarring' },
            eczema: { displayText: 'Eczema' },
            dry_skin: { displayText: 'Dry Skin' },
            redness_rosacea: { displayText: 'Redness / Rosacea' },
            bumpy_skin: { displayText: 'Bumpy Skin' },
            psoriasis: { displayText: 'Psoriasis' },
            wrinkles: { displayText: 'Wrinkles' },
            dark_spots: { displayText: 'Dark Spots' }
        }
    };

    handleDobChange = date => {
        this.setState({
            dateOfBirth: date
        });
    };

    handleTimeChange = date => {
        this.setState({
            timeOfBirth: date
        });
    };

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            isLoading: true
        })

        let i = 0;
    
        setInterval(() => {
            i++;
            if (i < 800) {
                this.setState({
                    loadingBackground:  `linear-gradient(${i}deg, rgba(191,230,255,1) 48%, rgba(254,206,234,1) 58%)`
                })
            }
        }, 5);

        axios.post(`https://v2-api.sheety.co/ea57f67b579af1a26d164034c3bc694f/skinSunStars/quiz`, {
            "quiz": {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                instagram: this.state.instagram,
                email: this.state.email,
                dateOfBirth: this.state.dateOfBirth,
                timeOfBirth: this.state.timeOfBirth,
                skinConcerns: `${this.state.skinConcerns}`
            }
        })
        .then(res => {
            let { skinConcerns } = this.state;
            let [choiceOne, choiceTwo, choiceThree] = skinConcerns;
            let message = []

            // select the index based on the order of the user's concerns, or the last one if it doesnt exist
            message.push(Definitions[choiceOne][skinConcerns.indexOf(choiceOne)]  || Definitions[choiceOne].slice(-1)[0])
            message.push(Definitions[choiceTwo][skinConcerns.indexOf(choiceTwo)] || Definitions[choiceTwo].slice(-1)[0])
            message.push(Definitions[choiceThree][skinConcerns.indexOf(choiceThree)] || Definitions[choiceThree].slice(-1)[0])

            this.setState({ 
              submitted: true,
              message: message
            });

            setTimeout(() => {
                this.setState({
                    isLoading: false
                })
            }, 1500);
        })
    }

    handleTextChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectConcern = e => {
        e.preventDefault();

        const concern = e.target.dataset.concern;
        const { skinConcerns } = this.state;
        const concernIsSelected = skinConcerns.includes(concern);
        let joined = null;
        
        if (concernIsSelected) {
            joined = skinConcerns.filter((x) => x !== concern);
            this.setState({ skinConcerns: joined });
        } else if (skinConcerns.length < 3) {
            joined = skinConcerns.concat(concern);
            this.setState({ skinConcerns: joined });
        }
    }
    
    handleShare = e => {
        e.preventDefault();
        window.prompt("Copy to clipboard: Ctrl+C, Enter", 'http://mytopicals.com/skinsunandstars');
    }

    handleShareButtonClick = e => {
        e.preventDefault();
        
        this.setState({
            displayShareModal: !this.state.displayShareModal
        })
    }

    render() {
        let { 
            skinConcernOptions, 
            isLoading,
            loadingBackground,
            submitted,
            firstName,
            message,
            signs,
            displayShareModal
        } = this.state;

        return (
            <div className="quiz-wrap">
                <div className={`loading ${isLoading ? '' : 'hide'}`} style={{ background: loadingBackground }}>
                    <Logo />
                </div>
                <div className={`share-modal ${ displayShareModal ? '' : 'hide'}`}>
                    <span>1 Friend Sign Up = $1 to</span> <br />   
                    <img src={SadGirlsClub} />
                    <span>Sad Girls Club</span>
                    <a onClick={ this.handleShare } href="http://mytopicals.com/skinsunandstars">COPY SHARE LINK</a>
                    <a href="#" className="close-share-modal" onClick={this.handleShareButtonClick}>Close</a>
                </div>
                <div className="quiz">
                    {
                        submitted ? 
                        <div>
                        <div className="message">
                            <h1 className="message-heading">Congratulations, { firstName } </h1>
                            <span className="star"></span>

                            <button onClick={ this.handleShareButtonClick } className="share-btn" href="https://mytopicals.com/skinsunandstars">
                                Share
                            </button>
                                { 
                                    message.map((m, i) => (
                                        <div>
                                            <h3>{ signs[i] } Sign:  { m.ingredient }</h3>
                                            <p className="message-p">{m.description}</p>
                                        </div>
                                    )) 
                                }
                        </div> 
                        
                        <button onClick={ this.handleShareButtonClick } className="share-btn" href="https://mytopicals.com/skinsunandstars">
                            Share
                        </button>

                        </div>
                        : // show the form
                    
                        <form onSubmit={ this.handleSubmit }>
                            <div className="input-row">
                                <div className="input-column">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" value={this.state.firstName} placeholder="First name" onChange={this.handleTextChange} />
                                </div>
                                <div className="input-column">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.handleTextChange} />
                                </div>
                            </div>
                            
                            <div className="input-row">
                                <div className="input-column">
                                    <label>Instagram</label>
                                    <input type="text" name="instagram" value={this.state.instagram} placeholder="e.g. @iamcoreyg" onChange={this.handleTextChange} />
                                </div>
                            </div>

                            <div className="input-row">
                                <div className="input-column">
                                    <label>Email</label>
                                    <input type="text" name="email" value={this.state.email} placeholder="your.email@example.com" onChange={this.handleTextChange} />
                                </div>
                            </div>

                            <div className="input-row">
                                <div className="input-column">
                                    <label>Date of Birth</label>
                                    <DatePicker
                                        name="dateOfBirth"
                                        selected={ this.state.dateOfBirth }
                                        onChange={ this.handleDobChange }
                                    />
                                </div>
                                <div className="input-column">
                                    <label>Time of Birth  <br /> (Guess if you’re not sure)</label>
                                    <TimePicker
                                        disableClock="true"
                                        name="timeOfBirth"
                                        selected={ this.state.timeOfBirth }
                                        onChange={ this.handleTimeChange }
                                    />
                                </div>
                            </div>
                            
                            <div className="skin-concerns">
                                <div><label>SKIN CONCERNS : (Choose 3)</label></div>
                                {
                                    Object.keys(skinConcernOptions).map((concern) => (
                                        <div className="button-wrap">
                                            <button className={`skin-concern-button ${ concern } ${ this.state.skinConcerns.includes(concern) ? 'selected' : '' }`} onClick={this.selectConcern} data-concern={ concern }>
                                                <span>{ skinConcernOptions[concern].displayText }</span>
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>

                            <button type="submit" className={`submit ${ (this.state.firstName === '' || this.state.skinConcerns.length < 3) ? 'disabled' : '' }`}>Submit</button>
                        </form>
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;