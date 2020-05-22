import React from 'react';
class Home extends React.Component{
    constructor(props){
       super(props);
       this.state={
           welcomeString:"",
           openLink:''
       }
    }
    urlifyString(string) {
        let openLink=null;
        const urlRegex = "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?";
        let text= string.match(urlRegex);
        text?openLink=text[0]:null;
        this.setState({
            openLink:openLink
        })
    }
    getSearchData=(event)=>{
        let str=event&&event.target.value;
        this.urlifyString(str);
        this.setState({
            welcomeString:event.target.value
        })
    }
    render(){
        return(
            <div>
                <div>Enter you feedback <input type="text" onChange={this.getSearchData}/> {this.state.welcomeString}</div>
                {this.state.openLink&&<iframe src={"//"+this.state.openLink} width="800" height="800"></iframe>}
            </div>
        )
    }
}
export default Home;
