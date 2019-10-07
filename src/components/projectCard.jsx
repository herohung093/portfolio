import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ProjectModal from "./projectModal";

class ProjectCard extends Component {
  state = { displayDetail: false };
  showDetail = () => {
    this.setState({ displayDetail: true });
  };
  closeDetail = () => {
    this.setState({ displayDetail: false });
  };
  render() {
    return (
      <div>
        <Card
          style={{ margin: "10px", maxWidth: "345px" }}
          onClick={() => this.showDetail()}
        >
          <CardActionArea width="200">
            <CardMedia
              component="img"
              alt="Dragon Dental"
              height="140"
              image={require(`${this.props.image}`)}
              title="Dragon Dental"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button
            size="small"
            color="primary"
            onClick={() => this.showDetail()}
          >
            Learn More
          </Button> */}
          </CardActions>
        </Card>
        <ProjectModal
          show={this.state.displayDetail}
          handleClose={this.closeDetail}
          detail={this.props.detail}
          image={this.props.image}
          imageDetail={this.props.imageDetail}
          name={this.props.name}
        ></ProjectModal>
      </div>
    );
  }
}

export default ProjectCard;
