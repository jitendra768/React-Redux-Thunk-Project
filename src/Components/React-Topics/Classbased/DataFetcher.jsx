import { Component } from "react";

export default class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ data, loading: false }));
  }
  render() {
    const { data, loading } = this.state;
    return (
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="p-6">
          <h3 className="text-lg font-semibold">DataFetcher</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data.slice(0,10).map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
