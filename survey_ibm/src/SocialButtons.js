import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class SocialButtons extends React.Component {
    render() {
        return(
            <div className='row'>
                <div className='col text-center'> 
                    <FontAwesome name='facebook' />
                    <a  href="https://es-la.facebook.com/">Facebook</a>
                </div>
                <div className='col text-center'> 
                    <FontAwesome name='twitter' />
                    <a  href="https://twitter.com/login">Twitter</a>

                </div>
                <div className='col text-center'> 
                    <FontAwesome name='linkedin' />
                    <a  href="https://www.linkedin.com/">LinkedIn</a>
                </div>
            </div>
        );
    }
}