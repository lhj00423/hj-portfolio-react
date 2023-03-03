import React from 'react';
import './Project_3.css';

const Project_3 = () => {
    return (
        <div id="project" className='project'>
            <div className='content-box'>
                <h2 className='titeng'>PROJECT</h2>
                <div className='project-top4'>
                    <ul>
                        <li>
                            <div id="top4-ball">
                                <img src='/images/javascript_ball.png' alt=""></img>
                            </div>
                            <div className='top4-cont'>
                                <span> HTML5, CSS3, JavaScript </span>
                                <em>Baseball-Game</em>
                                <p className='sub-tit'>
                                    자바스크립트를 기반으로 야구게임 사이트입니다.
                                </p>
                                <p className='cont-txt'>
                                    현장 야구장 전광판 구현 및 css 효과 / 팀교체 알림 / 
                                    <br className='pc'/>
                                    스윙 ,볼 확률 실제 경기처럼 조정
                                </p>
                                <div className='live-btn'>
                                    <h6>
                                         VIEW 
                                        <span>LIVE</span>
                                    </h6>
                                    <h6>
                                         VIEW  
                                        <span>GITHUB</span>
                                    </h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project_3;