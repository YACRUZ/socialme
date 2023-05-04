import React, { Component } from "react";
import "../App.css";
import TutorialDataService from "../services/imagen.service";

import LikeButton from "../reactions/LikeButton.component";
import SadButton from "../reactions/SadButton.component";
import LoveButton from "../reactions/LoveButton.component";
import WowButton from "../reactions/WowButton.component";
import HahaButton from "../reactions/HahaButton.component";
import AngryButton from "../reactions/AngryButton.component";

import Comment from "./comment.component";
import Imagen from "./imagen.component";

export default class ImagenesList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = TutorialDataService.getAll()
      .orderBy("title", "asc")
      .onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tutorials.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
        url: data.url,
      });
    });

    this.setState({
      tutorials: tutorials,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  render() {
    const { tutorials, currentTutorial } = this.state;
    return (
      <div className="list row mx-auto">
        <div className="col-md-6">
          <h4>Publicaciones</h4>
          <ul className="list-group ">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={"list-group-item "}
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  <div className="profile-pic">
                    <a href="/">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/socialme-54935.appspot.com/o/image%2FWhatsApp%20Image%202023-05-03%20at%2012.39.35%20AM.jpeg?alt=media&token=ad455e02-0af5-4103-bd4a-b0ae59dc14f3"
                        alt="Perfil"
                      />
                    </a>
                    <br />
                    <span>{tutorial.title}</span>
                  </div>
                  <p className="tx2">Yacruz</p>
                  <div>
                    <img
                      className="mx-auto cont-center radius"
                      src={tutorial.url}
                      width="250"
                      alt="Imagen"
                    ></img>
                  </div>
                  <div id="reactions">
                    <LikeButton />
                    <SadButton />
                    <LoveButton />
                    <WowButton />
                    <HahaButton />
                    <AngryButton />
                  </div>
                  <Comment />
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <Imagen tutorial={currentTutorial} refreshList={this.refreshList} />
          ) : (
            <div className="profile-container">
              <h4>Perfil</h4>
              <span className="background-element cont-center1">
                <p className="tx25 text-center">Yacruz</p>
                <span className="cont-center">
                  <img
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/socialme-54935.appspot.com/o/image%2FWhatsApp%20Image%202023-05-03%20at%2012.39.35%20AM.jpeg?alt=media&token=ad455e02-0af5-4103-bd4a-b0ae59dc14f3"
                    }
                    width="250"
                    alt="Perfil"
                  />
                </span>
                <br />
                <p className="tx1 text-center">
                  Me gustan los videojuegos y el anime
                </p>
                <p className="tx1 text-center">Mis redes sociales:</p>
                <div className="cont-center">
                  <a href="https://www.facebook.com/yahir.jesus.779">
                    <img
                      src="https://www.facebook.com/images/fb_icon_325x325.png"
                      height="50px"
                      width="50px"
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://www.youtube.com/channel/UC0nPwl62QIktOw3ZkktDHrw">
                    <img
                      src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-0.png"
                      height="50px"
                      width="50px"
                      alt="YouTube"
                    />
                  </a>
                  <a href="https://github.com/YACRUZ">
                    <img
                      src="https://www.transparentpng.com/thumb/logos/github-logo-png-rtT9Sy.png"
                      height="50px"
                      width="50px"
                      alt="GitHub"
                    />
                  </a>
                </div>
                <div>
                  <p className="tx1 text-center">S20006732</p>
                </div>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
