import React, { Component } from "react";
import axios from "axios";

export default class MenuItems extends Component {
  constructor() {
    super();
    this.mover = this.mover.bind(this);
    this.newItem = this.newItem.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.menuUpdate = this.menuUpdate.bind(this);
    this.dataLoad = this.dataLoad.bind(this);
    this.state = {
      data: [],
      file: null
    };
  }

  onFileChange = (event, index) => {
    let data = this.state.data;
    data[index].file = event.target.files[0];
    this.setState({
      data: data
    });
  };

  uploadFile = index => {
    this.setState({ error: "", msg: "" });

    if (this.state.data[index].file === null) {
      return;
    }

    if (this.state.data[index].file.size >= 2000000) {
      this.setState({ error: "File size exceeds limit of 2MB." });
      return;
    }

    let data = new FormData();
    data.append("file", this.state.data[index].file);
    data.append("name", this.state.data[index].file.name);

    fetch("http://localhost:8080/uploadFile", {
      method: "POST",
      body: data
    })
      .then(response => {
        this.setState({ error: "", msg: "Sucessfully uploaded file" });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  componentDidMount() {
    this.dataLoad();
  }
  //get JSON data
  dataLoad = async () => {
    const api_call = await fetch(`http://localhost:8080/api/menu/`);
    const data = await api_call.json();
    this.setState({
      data: data,
      loggedIn: true,

      name: "",
      summary: "",
      price: ""
    });
  };

  menuUpdate = (event, id, index) => {
    var image = event.target
      .getElementsByTagName("Input")[0]
      .value.replace("C:\\fakepath\\", "/menu_images/");
    var menu_item = event.target.getElementsByTagName("Input")[1].value;
    var summary = event.target.getElementsByTagName("Input")[2].value;
    var price = event.target.getElementsByTagName("Input")[3].value;
    event.preventDefault();

    var d = this.state.data;
    if (image !== "") {
      this.uploadFile(index);

      d[index].image = image;

      this.setState({
        data: d
      });
    } else {
      image = d[index].image;
    }

    axios.put(`http://localhost:8080/api/menu/` + id, {
      menu_item: menu_item,
      summary: summary,
      price: price,
      image: image
    });
  };

  mover = (index, pos) => {
    let d = this.state.data;
    let p_menu_item = d[index].menu_item;
    let p_summary = d[index].summary;
    let p_price = d[index].price;
    let p_image = d[index].image;

    d[index].menu_item = d[index + pos].menu_item;
    d[index].summary = d[index] + pos.summary;
    d[index].price = d[index + pos].price;
    d[index].image = d[index + pos].image;

    d[index + pos].menu_item = p_menu_item;
    d[index + pos].summary = p_summary;
    d[index + pos].price = p_price;
    d[index + pos].image = p_image;

    this.setState({
      data: d
    });
  };

  deleteItem = (id, index) => {
    axios.delete("http://localhost:8080/api/menu/" + id);
    let temp = this.state.data;
    temp.splice(index, 1);
    this.setState({ data: temp });
  };

  newItem = () => {
    axios
      .post(`http://localhost:8080/api/menu/`, {
        menu_item: "new item",
        summary: "new summary",
        price: "0.0",
        image: "/menu_images/new.png"
      })
      .then(res => {
        let d = this.state.data;
        d = d.concat([res.data]);
        this.setState({
          data: d
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-dark text-center text-white-50 row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {this.state.data.map(item => (
            <div
              key={item.menu_id}
              className="bg-dark text-center text-white-50 col mb-3"
            >
              <div className="bg-dark text-center text-white-50 card h-100">
                <img
                  src={item.image}
                  className="bg-dark text-center text-white-50 card-img-top"
                  alt="..."
                />
                <div className="bg-dark text-center text-white-50 card-body">
                  <h5 className="bg-dark text-center text-white-50 text-danger">
                    {item.menu_item}
                  </h5>
                  <p className="bg-dark text-center text-white-50 card-text">
                    {item.summary}
                  </p>
                </div>
                <div className="bg-dark text-center text-white-50 card-footer">
                  <strong>{item.price}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
