import { Component } from 'react';
import Card from "../components/Card";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const movies = await fetch('assets/data.json');
    const moviesJSON = await movies.json()
    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div className={'row'}>
        { data.map(
            movie =>
              <div className={'col-sm-2'} key={ movie.id }>
                <Card movie={ movie } />
              </div>
          )
        }
      </div>
    );
  }
}