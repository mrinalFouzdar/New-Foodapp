import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,

            userInfo:{
                name: 'Dummy',
                location: 'Default'
            }
        }
        // console.log(props)
        console.log(`${this.props.name} child component`)
    }

   async componentDidMount(){
        // console.log(`${this.props.name}child did mount`)
        // Api Call
        const data = await fetch('  https://api.github.com/users/mrinalFouzdar');
        const json = await data.json();

        this.setState({
            userInfo: json
        })
        console.log(json)
    }

    componentDidUpdate(){
        console.log('component did update')
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }
    render(){
        console.log(`${this.props.name}child render`)
        // const {name, location} = this.props
        // const {count,count2} = this.state;
        const {name,location} = this.state.userInfo
        return (
            <div className="user-card1">
                {/* <h1>Class component</h1>
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2: this.state.count2+1
                    })
                }}>Count Increase</button>
                <h1>Count2: {count2}</h1>
              <h2>Name: {name}</h2>
              <h2>Location: {location}</h2> */}
                <h1>Name: {name}</h1>
                <h1>Location: {location}</h1>

            </div>
          ); 
    }
}

export default UserClass;