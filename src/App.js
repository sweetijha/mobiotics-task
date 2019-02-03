import React, { Component } from "react";
import "./App.css";
import music from "./image/music.PNG";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0%'
  }
};

class App extends Component {
  state = {
    data: [],
    allData : [],
    modalIsOpen: false,
    currentVideo : ""
  };

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({modalIsOpen: false});
    this.setState({currentVideo: ""});
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }
  openModal(url) {
    this.setState({currentVideo: url});
    this.setState({modalIsOpen: true});
  }
  componentWillMount() {
    this.setState({
      allData : [
        {
          category_name : "Latest Music Video",
          category_icon : "https://cdn3.iconfinder.com/data/icons/social-media-circle-flat-1/1024/itunes-01-01-512.png",
          category_id : 1,
          video : [
            {
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },
            {
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            }
          ]
          
        },
        {
          category_name : "Latest Music Video",
          category_icon : "https://cdn3.iconfinder.com/data/icons/social-media-circle-flat-1/1024/itunes-01-01-512.png",
          category_id : 1,
          video : [
            {
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },
            {
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            }
          ]
          
        },
        {
          category_name : "Latest Music Video",
          category_icon : "https://cdn3.iconfinder.com/data/icons/social-media-circle-flat-1/1024/itunes-01-01-512.png",
          category_id : 1,
          video : [
            {
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },
            {
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            },{
              video_image : "https://cdn.pixabay.com/photo/2016/01/19/17/56/concert-1149979__340.jpg",
              video_name : "SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali Khan | Tanishk Bagchi,Neha Kakkar, Kumar Sanu",
              video_album : "T-Series",
              video_icon : "fa fa-check-circle checkIcon",
              video_views : "96M",
              video_uploaded_time : "1 week ago",
              video_url : "https://www.youtube.com/embed/OftcMl-mEUw"

            }
          ]
          
        }
        

      ]
    })
  }
  displayAllData() {
    var temp = [];
    for (let i = 0; i < this.state.allData.length; i++) {
      temp.push(
        <div className="categoery">
              <img src={this.state.allData[i].category_icon} alt="asdf" style={{width:28,marginRight:10}}/>
              <div className="c_name">{this.state.allData[i].category_name}</div>
            </div>
      );
            for(let j=0;j<this.state.allData[i].video.length;j++){
              temp.push(
        <div style={{ width: "20%", display: "inline-block" }} onClick={() => this.openModal(this.state.allData[i].video[j].video_url)}>
          <div className="image">
            <img
              style={{ width: "100%" }}
              src={this.state.allData[i].video[j].video_image}
              frameborder="0"
              allow=" gyroscope; picture-in-picture"
              alt="you"
            />
            <div className="image-text">
              {this.state.allData[i].video[j].video_name}
            </div>
            <div className="album">
            { this.state.allData[i].video[j].video_album}
              <i className={this.state.allData[i].video[j].video_icon} aria-hidden="true" />
            </div>
            <div className="viewer">
              {this.state.allData[i].video[j].video_views} <i className="fa fa-circle dot" aria-hidden="true" /> {this.state.allData[i].video[j].video_uploaded_time}
            </div>
          </div>
          
        </div>
      );
            }
      //       console.log(tempOne)
      // temp.push(
      //   tempOne
      // );
    }
    return temp;
  }
  render() {
    return (
      <div>
        <nav className="navHeader">
          <div className="menubar">
            <i className="fa fa-bars" aria-hidden="true" />
            <i className="fa fa-square" aria-hidden="true" />
            <span className="logo">LOGO</span>
            <i className="fa fa-angle-down" aria-hidden="true" />
            <i className="fa fa-globe" aria-hidden="true" />
            <i className="fa fa-bell-o" aria-hidden="true" />
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </nav>
        <div className="menubar">
          <div>
            {this.displayAllData()}
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <iframe width="560" height="315" src={this.state.currentVideo} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </Modal>
      </div>
      
    );
  }
}

export default App;
