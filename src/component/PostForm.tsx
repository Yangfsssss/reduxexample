import React from "react";

class PostForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: [],
      body: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e: any) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // console.log("1234");

    fetch("https://jsonplaceholder.typicode.com/posts", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log("error"));
  }

  render() {
    return (
      <div>
        <h1>添加内容</h1>
        <form onSubmit={this.onSubmit}></form>
        <div>
          <label>title</label>
          <br />
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </div>
        <div>
          <label>body</label>
          <br />
          <textarea
            name="body"
            onChange={this.onChange}
            value={this.state.body}
          />
        </div>
        <br />
        <button type="submit" onClick={this.onSubmit}>
          添加
        </button>
      </div>
    );
  }
}
export default PostForm;
