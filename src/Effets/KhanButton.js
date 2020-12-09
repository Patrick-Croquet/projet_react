import React, { Component } from "react";
import styled from 'styled-components';


class KhanButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='(Close)';
		}else{
			title ='(View more)';
		}

		return (
            <Styles>
                <div className="box">
                    <div className="boxTitle" onClick={this.toggleBox}>
                        {title}
                    </div>
                    {opened && (					
                        <div class="boxContent">
                            {children}
                        </div>
                    )}
                </div>
            </Styles>
		);
	}
}

export default KhanButton;


const Styles = styled.div`
    .boxTitle {
        font-family: 'Poiret One', cursive;
        font-size: 2em;
        letter-spacing: 0.4em;
        margin-top: 2em;
        margin-bottom: 2em;
        color: #E4E3E2;
}
`